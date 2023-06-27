const middle = ['lettuce', 'cheese', 'patty']
const burger = ['top bun', ...middle, 'bottom bun']
console.log(burger)

const brass = ['trumpet', 'trombone', 'french horn', 'baritone', 'tuba']
const woodwind = ['flute', 'oboe', 'clarinet', 'saxophone', 'bassoon']
const instruments = [...brass, ...woodwind]
console.log(instruments)

const numbers = [10, 20, 30, 40]
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))
