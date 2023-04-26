import React from 'react';
import ReactDOM from 'react-dom/client';
import users from './data.json';
// import './index.css';

// const div1 = document.createElement('div')
// console.log("div1:>>", div1 )
// const root = document.getElementById('root')
// root.append(div)

// const p = React.createElement('p', {id: 'text', children: 'Text content'})
// const p2 = React.createElement('p', {id: 'text2', children: 'Text content'})
// const users = [
//     {name: 'Alex1', age: '30'},
//     {name: 'Alex2', age: '30'},
//     {name: 'Alex3', age: '30'},
//     {name: 'Alex4', age: '30'},
// ]




// console.log('card :=>>', card)

// const name = 'Alex'
// const p = <p id = 'text3' className = 'qwerty' data-item='qwerty'>Hello {name}</p>

// const div = (<div id='123' className='wrap'>{p}</div>)

// const div = React.createElement('div', {id:'123', className: 'wrap', children: [p, p2]})

// console.log("div:>>", div)

const Card = () => 
users.map((el)=>{
    return (<div className="card" style={{width: '18rem'}}>
    <img src="https://media.istockphoto.com/id/1403454705/photo/a-smiling-little-puppy-of-a-light-brown-poodle-in-a-beautiful-green-meadow-is-happily-running.jpg?b=1&s=170667a&w=0&k=20&c=YZpQ16RgZj8wfGAHwAXCTtssN0WxIktXjf_2DDDGpFQ=" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{el.name}</h5>
      <p className="card-text">{el.email}</p>
      <a href="{el.website}" className="btn btn-primary">{el.website}</a>
    </div>
  </div>)
})

ReactDOM.createRoot(document.getElementById('root')).render(<Card/>)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//   </React.StrictMode>
// );


