console.log(getRandomNumber(10))

function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper) + 1
  return randomNumber
}
