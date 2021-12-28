import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Wrapper} from './component.style.js'

function ToDoItem({title,id,complete}){
  return(
    <li className='todo'>
      <label>
        <input
          type='checkbox'
          defaultChecked={false}
        />
        <span>{title}</span>
      </label>
    </li>
  )
}
function ToDoList({todos}){
  return(
    <ul>
     {todos.map(item=><ToDoItem key={item.id} {...item}/>)}
    </ul>    
  );
}

class MyToDo extends React.Component {
  state = {
    todos:[{id:1,title:"test",complete:false}]
  }
  render()
   {return (
    <Wrapper>
      <header className="header">
		  <h1>todos</h1>
		  <input className="new-todo" placeholder="What needs to be done?" autoFocus></input>
	  </header>
    <ToDoList todos={this.state.todos}/>
    </Wrapper> );}  
}

ReactDOM.render(
  <MyToDo />,
  document.getElementById('root')
);