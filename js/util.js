'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()(max - min) + min);
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
  