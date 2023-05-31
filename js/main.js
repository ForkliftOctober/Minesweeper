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
}

// TODO add mines
function buildBoard(size) {
    var board = []

    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            board[i][j] = {
            }
        }
    }
    console.table(board)
    return board
}

// TODO connect to html
function renderBoard(gBoard) {
    var strHTML = ''

    for (var i = 0; i < gBoard.length; i++) {
        strHTML += `<tr class="Board-row" >\n`
        for (var j = 0; j < gBoard[0].length; j++) {
            const cell = gBoard[i][j]

            // For a cell of type SEAT add seat class
            var className = (cell.isSeat) ? 'seat' : ''

            // For a cell that is booked add booked class
            if (cell.isBooked) {
                className += ' booked'
            }
            // Add a seat title
            const title = `Seat: ${i + 1}, ${j + 1}`

            strHTML += `\t<td title="${title}" class="cell ${className}" 
                                onclick="onCellClicked(this, ${i}, ${j})" >
                             </td>\n`
        }
        strHTML += `</tr>\n`
    }

    const elCells = document.querySelector('.board-cells')
    elCells.innerHTML = strHTML
}

function setMinesNegsCount(board) {

}

function onCellClicked(elCell, i, j) {

}

function onCellMarked(elCell) {

}

// TODO end game when mine clicked
// TODO end game when no open cells
function checkGameOver() {

}

function expandShown(board, elCell, i, j) {

}