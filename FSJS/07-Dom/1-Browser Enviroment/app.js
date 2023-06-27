const btnUpdate = document.querySelector('.btn-main')
const btnToggle = document.querySelector('.btn-toggle')

btnUpdate.addEventListener('click', () => {
  const input = document.querySelector('.input-main')
  const headline = document.getElementById('headline')

  headline.className = 'grow'
  headline.textContent = input.value
  input.value = ''
})

btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container')

  if (listContainer.style.display === 'none') {
    btnToggle.textContent = 'Hide List'
    listContainer.removeAttribute('style')
  } else {
    btnToggle.textContent = 'Show List'
    listContainer.style.display = 'none'
  }
})
