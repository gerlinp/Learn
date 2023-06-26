// Global Scope
const person = 'Gerlin'

function greeting() {
  // Function Scope
  const person = 'Meg'
  alert(`Hi, ${person}!`)
}

greeting()
alert(`Hi ${person}!`)
greeting()
