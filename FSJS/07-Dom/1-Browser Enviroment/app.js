const headline = document.getElementById('headline')
const btnUpdate = document.getElementById('btn-main')
const randomRGBColor = () => Math.floor(Math.random() * 256)

function randomRGB(value) {
  return `rgb( ${value()}, ${value()}, ${value()} )`
}

btnUpdate.addEventListener('click', () => {
  headline.style.border = `solid 10px ${randomRGB(randomRGBColor)}`
  headline.style.fontSize = '60px'
})
