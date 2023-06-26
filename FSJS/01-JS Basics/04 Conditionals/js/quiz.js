/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
const answers = ['ruby', 'python', 'css', 'html', 'Javascript']

// 2. Store the rank of a player
let rank
let score = 0

// 3. Select the <main> HTML element
const main = document.querySelector('main')

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const questions = ["Name a programming language that's also a gem.", 'Name a programming language thats also a snake.', 'What language do you use to style web pages?', 'What language do you use to build a structure of web pages?', 'What language do you use to add interactivity to a web page']

questions.forEach((question, idx) => {
  if (prompt(`${question}`).toLowerCase() === answers[idx].toLowerCase()) {
    score++
  }
})

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (score === 5) {
  rank = 'Gold'
} else if (score >= 3) {
  rank = 'silver'
} else if (score >= 1) {
  rank = 'Bronze'
} else {
  rank = 'no crown'
}

// 6. Output results to the <main> element
document.querySelector('main').innerHTML = `<h1> You got a ${rank} rank</h1>`
