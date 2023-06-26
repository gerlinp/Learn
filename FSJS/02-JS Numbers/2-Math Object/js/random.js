// const dieRoll = Math.floor(Math.random() * 6) + 1
// console.log(`You rolled a ${dieRoll}`)

// Collect input from a user
const inputLow = prompt('Please provide your lowest number')
const inputHigh = prompt('Please provide your highest number')

// Convert the input to a number
const lowNumber = parseInt(inputLow)
const highNumber = parseInt(inputHigh)

if (highNumber && lowNumber) {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor(Math.random() * (highNumber - lowNumber) + 1) + lowNumber

  // Create a message displaying the random number
  document.querySelector('main').innerHTML = `<h1>${randomNumber} is a random number between ${lowNumber} and ${highNumber}!</h1>`
} else {
  document.querySelector('main').innerHTML = `<h1>You need to provide two numbers. Please try again!</h1>`
}
