// 1. Create a multidimensional array to hold quiz questions and answers
let quiz = [
  ['How many planets are in the Solar System', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have', '6'],
  ['What year was Javascript created?', '1995'],
]

// 2. Store the number of questions answered correctly
let score = 0
let correctQuestions = []
let wrongQuestions = []

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i = 0; i < quiz.length; i++) {
  let answer = prompt(` ${quiz[i][0]} `)

  if (answer == quiz[i][1]) {
    correctQuestions.push(quiz[i])
    score++
  } else {
    wrongQuestions.push(quiz[i])
  }
}

function createListItems(arr) {
  let items = ''
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i][0]}</li>`
  }
  return items
}

let html = `
    <h1> You got ${score} question(s) correct</h1>
    <h2> You got these questions right: </h2>
    <ol>${createListItems(correctQuestions)}

    <h2> You got these questions wrong:</h2>
    <ol>${createListItems(wrongQuestions)}
`
// 4. Display the number of correct answers to the user
document.querySelector('main').innerHTML = html
