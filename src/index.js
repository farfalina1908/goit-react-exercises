import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

const div1 = document.createElement('div')
console.log("div1:>>", div1 )
// const root = document.getElementById('root')
// root.append(div)

const p = React.createElement('p', {id: 'text', children: 'Text content'})
const p2 = React.createElement('p', {id: 'text2', children: 'Text content'})
const p3 = <p id = 'text3' className = 'qwerty'>Text content</p>

const div = React.createElement('div', {id:'123', className: 'wrap', children: [p, p2]})
console.log("div:>>", div)
ReactDOM.createRoot(document.getElementById('root')).render(div)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//   </React.StrictMode>
// );


