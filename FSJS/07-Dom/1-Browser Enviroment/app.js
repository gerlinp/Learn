const btnUpdate = document.querySelector('.btn-main')
const headline = document.getElementById('headline')
const items = document.querySelectorAll('li')
const highlights = document.querySelectorAll('.highlight')
const randomRGBColor = () => Math.floor(Math.random() * 256)

for (const highlight of highlights) {
  highlight.style.backgroundColor = 'cornsilk'
}

for (let i = 0; i < items.length; i++) {
  items[i].style.color = 'orchid'
}

btnUpdate.addEventListener('click', () => {
  headline.style.border = `solid 10px ${randomRGB(randomRGBColor)}`
  headline.style.fontSize = '60px'
})

function randomRGB(value) {
  return `rgb( ${value()}, ${value()}, ${value()} )`
}
