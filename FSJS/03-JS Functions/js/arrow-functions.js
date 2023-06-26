//  Arrow function basic syntax
const getRandomNumber = (upper) => {
  const randomNumber = Math.floor(Math.random() * upper) + 1
  return randomNumber
}

//  Arrow function  multiple parameter
const getArea = (width, length, unit) => {
  const area = width * length
  return `${area} ${unit}`
}

//  Arrow function one parameter
const square = (x) => {
  return x * x
}
square(10) // 100
