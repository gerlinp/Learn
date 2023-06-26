const secsPermin = 60
const minsPerHour = 60
const hoursPerDay = 24
const daysPerWeek = 7
const weeksPerYear = 52

const secondsPerDay = secsPermin * minsPerHour * hoursPerDay

console.log(`There are ${secondsPerDay} seconds in a day`)

const yearsAlive = 35

console.log(`I've been alive for more than ${secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive} seconds`)
