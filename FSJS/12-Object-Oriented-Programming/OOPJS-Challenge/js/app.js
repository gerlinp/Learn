const game = new Gamepad()

document.querySelector('#begin-game').addEventListener('click', function () {
  game.startGame()

  this.style.display = 'none'
  document.querySelector('#play-area').style.opacity = '1'
})
