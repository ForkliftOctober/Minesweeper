'use strict'

const BOMB = '💣'
const FLAG = '🚩'

var gBoard
var gLevel
var gGame


// TODO reset timer
// TODO reset score
// TODO select difficulty

function onInit() {
    gLevel = {
        size: 4,
        mines: 2
    }
    gBoard = buildBoard(gLevel.size, gLevel.mines)
    renderBoard()
}

// add mines
function buildBoard(size) {
    var board = []

    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            board[i][j] = {
                isBomb: false,
            }
        }
    }
    // TEMP BOMBS
    board[1][1].isBomb = true
    board[2][2].isBomb = true
    console.log(board)
    return board
}


// connect to html
function renderBoard() {
    var strHTML = ''

    for (var i = 0; i < gBoard.length; i++) {
        strHTML += `<tr class="Board-row" >\n`
        for (var j = 0; j < gBoard[0].length; j++) {
            const cell = gBoard[i][j]

            const title = `Cell: ${i + 1}, ${j + 1}`

            strHTML += `\t<td title="${title}" class="cell" 
                                onclick="onCellClicked(this, ${i}, ${j})" >
                                ${cell.isBomb ? BOMB : ''}
                             </td>\n`
        }
        strHTML += `</tr>\n`
    }

    const elCells = document.querySelector('.board-cells')
    elCells.innerHTML = strHTML
}

// count neighbors
function setMinesNegsCount(gBoard, i, j) {
    var count = 0
    for (var i = gBoard.length - 1; i <= gBoard.length + 1; i++) {
        if (i < 0 || i > gBoard.length - 1) continue
        for (var j = gBoard[i].length - 1; j <= gBoard[i].length + 1; j++) {
            if (j < 0 || j > gBoard[0].length - 1) continue
            if (i === gBoard.length && j === gBoard[i].length) continue
            var currCell = gBoard[i][j]
            console.log('currCell: ', currCell);
            if (currCell.content === '$') count++
        }
    }
    return count
}

function onCellClicked(elCell, i, j) {
    const cell = gBoard[i][j]

    setMinesNegsCount()

    // ignore clicked cells
    if (cell.isClicked) return

    // mark
    elCell.classList.add('selected')
    
}

/*
function onCellMarked(elCell) {

}

// TODO end game when mine clicked
// TODO end game when no open cells
function checkGameOver() {

}

function expandShown(board, elCell, i, j) {

}
*/