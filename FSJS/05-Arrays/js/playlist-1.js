const playlist = [
  'Dance Now',
  'Headshots (4r da Locals)',
  'IMPALAS & HYDRAULICS',
  'Lift Me Up',
  'Where I Belong',
  'D/Vision (feat. EARTHGANG)',
  'Canal St. (feat. Bones)',
]

function createListItems(arr) {
  let items = ''
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`
  }
  return items
}

document.querySelector('main').innerHTML = `
    <ol>
        ${createListItems(playlist)}
    </ol>
`
