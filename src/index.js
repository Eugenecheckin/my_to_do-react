import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Wrapper} from './component.style.js'
import {Provider} from 'react-redux'
import { createStore } from "redux";
import { rootReducer } from "./rootReducer";


let store = createStore(rootReducer);
const mytodo = (
  <Provider store={store}>
   <MyToDo />
  </Provider>
)
store.subscribe(() => console.log(store.getState()))

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
  constructor(props){
    super(props);
    this.state = { todos : [ { id:1, title:"test", complete:false } ] }
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
  mytodo,
  document.getElementById('root')
);