const inStock = [
  'pizza',
  'cookies',
  'eggs',
  'apples',
  'milk',
  'cheese',
  'bread',
  'lettuce',
  'carrots',
  'broccoli',
  'potatoes',
  'crackers',
  'onions',
  'tofu',
  'limes',
  'cucumbers',
]
const search = prompt('Search for a product.')
let message

if (!search) {
  message = `<strong>In Stock:</strong> ${inStock.join(', ')}`
} else if (inStock.includes(search.toLowerCase())) {
  message = `Yes we have <strong>${search.toLowerCase()}</strong>. It's #${
    inStock.indexOf(search) + 1
  } on the list`
} else {
  message = `Sorry we do not have <strong>${search}</strong>`
}

document.querySelector('main').innerHTML = `<p>${message}</p>`
