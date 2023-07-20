function isAdult(age) {
  if (age && age >= 18) {
    return true
  } else {
    return false
  }
}

function countToFive(start) {
  start = start || 1
  for (let i = start; i <= 5; i++) {
    console.log(i)
  }
}

// console.log(isAdult(17))
// console.log(isAdult(35))
countToFive()
countToFive(0)
