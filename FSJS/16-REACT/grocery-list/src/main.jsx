import { createRoot } from 'react-dom/client'

const element = (
  <>
    <h1>My First React Element</h1>
    <p class='main-desc'>
      I just learned how to create a React node and render it into the DOM
    </p>
  </>
)

const img = <img src='image.jpg' />

const root = createRoot(document.getElementById('root'))

root.render(element)
