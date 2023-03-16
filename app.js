const desc = 'Just created a React ndoe and render it to the dom';
const myTitleID = 'main-title';
const name = 'Gerlin';

const header = (
  <header>
    <h1 id='myTitleID'>{name}'s First React Element</h1>
    <p className='main-desc'>{desc}</p>
  </header>
);

ReactDOM.render(header, document.querySelector('#root'));

console.log(title);
