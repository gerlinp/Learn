const headline = document.getElementById('headline')
const btnUpdate = document.getElementById('btn-main')
const randomRGBColor = () => Math.floor(Math.random() * 256)

const items = document.getElementsByTagName('li')

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'orchid'
}

btnUpdate.addEventListener('click', () => {
  headline.style.border = `solid 10px ${randomRGB(randomRGBColor)}`
  headline.style.fontSize = '60px'
})

function randomRGB(value) {
  return `rgb( ${value()}, ${value()}, ${value()} )`
}
