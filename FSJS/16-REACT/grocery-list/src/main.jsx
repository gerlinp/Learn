import { createRoot } from 'react-dom/client'

const desc =
  'I just learned how to create a React node and render it into the DOM'
const myTitleID = 'main-title'
const name = 'Gerlin'

const element = (
  <>
    <h1 id={myTitleID}>{name}'s First React Element</h1>
    <p class='main -desc'>{desc}</p>
    <input value={10 * 20} />
  </>
)

const img = <img src='image.jpg' />

const root = createRoot(document.getElementById('root'))

root.render(element)
