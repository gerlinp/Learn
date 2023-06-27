const playlist = [
  ['Dance Now', 'JID', '3:48'],
  ['Headshots (4r da Locals)', 'Isaiah Rashad', '3:14'],
  ['IMPALAS & HYDRAULICS', 'REASON & the Game', '2:58'],
  ['Lift Me Up', 'Vince Staples', '4:32'],
  ['Where I Belong', 'Joey Bada$$', '3:09'],
  ['D/vision (feat. EARTHGANG)', 'JID', '4:26'],
  ['SAUCE (feat. Vince Staples)', 'REASON', '2:59'],
]

const myArtists = `${playlist[0][1]}, ${playlist[1][1]}, ${playlist[4][1]}`
console.log(myArtists)
function createListItems(arr) {
  let items = ''
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i][0]}, by ${arr[i][1]} -  ${arr[i][2]}</li>`
  }
  return items
}

document.querySelector('main').innerHTML = `
      <ol>
          ${createListItems(playlist)}
      </ol>
  `
