let html = ''

const randomRGBColor = () => Math.floor(Math.random() * 256)

function randomRGB(value) {
  return `rgb( ${value()}, ${value()}, ${value()} )`
}

for (let i = 0; i < 100; i++) {
  html += `<div style="background-color: ${randomRGB(randomRGBColor)}">${i}</div>`
}

document.querySelector('main').innerHTML = html
