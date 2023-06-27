const btnUpdate = document.querySelector('.btn-main')

btnUpdate.addEventListener('click', () => {
  const input = document.querySelector('.input-main')
  const headline = document.getElementById('headline')
  headline.textContent = input.value
  input.value = ''
})

document.querySelector('ul').innerHTML
