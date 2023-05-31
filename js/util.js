'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()(max - min) + min);
}

function countNegs(mat, rowIdx, colIdx) {
    var count = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i > mat.length - 1) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > mat[0].length - 1) continue
            if (i === rowIdx && j === colIdx) continue
            var currCell = mat[i][j]
            if (currCell.content === '$') count++
        }
    }
    return count
}

function renderTimer() {
    var gElTimer = document.querySelector('.timer')
  
    var stopWatch = +gTimer.toFixed(2)
    gElTimer.innerText = stopWatch
  }
  
  function startTimer() {
    gIntervalId = setInterval(() => {
      gTimer += 0.01
      renderTimer()
    }, 10)
  }
  