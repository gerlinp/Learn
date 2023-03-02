const title = <h1>My First React Element!</h1>;

const desc = <p>Just created a React ndoe and render it to the dom</p>;

const header = React.createElement('header', null, title, desc);

ReactDOM.render(header, document.querySelector('#root'));

console.log(title);
