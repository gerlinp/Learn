function sayGreeting(greeting, name = 'student') {
  return `${greeting}, ${name}`
}

function getArea(width, length, unit = 'Sq meters') {
  const area = width * length
  return `${area} ${unit}`
}
