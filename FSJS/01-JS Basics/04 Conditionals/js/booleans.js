let correctGuess = false
const number = 6
const guess = prompt('Guess a number between 1 and 10.')

if (+guess === number) {
  correctGuess = true
}

if (correctGuess) {
  console.log('The condition is true.')
} else {
  console.log(`Sorry . The number was ${number}`)
}
