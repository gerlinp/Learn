// 1. Declare variables and capture input.
const adjective = prompt('Please type a adjective')
const verb = prompt('Please type a verb')
const noun = prompt('please type a noun')

// 2. Combine the input with other words to create a story.
let message = `<p>There once was a ${adjective} programmer who wanted to use JavaScript to ${verb} the ${noun}.</p>`
// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = message
