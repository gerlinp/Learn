const getRandomNumber = (upper) => {
  const randomNumber = Math.floor(Math.random() * upper) + 1
  return randomNumber
}

console.log(getRandomNumber(20))
console.log(getRandomNumber(444))
console.log(getRandomNumber(21))
console.log(getRandomNumber(3291988))
