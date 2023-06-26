function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper) + 1
  return randomNumber
}

console.log(getRandomNumber(6))
console.log(getRandomNumber(100))
console.log(getRandomNumber(26))
console.log(getRandomNumber(450))
