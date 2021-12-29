import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Wrapper} from './component.style.js'
import { createStore } from "redux";
import { Provider } from 'react-redux';

const addTodoAction = text => {
  return {
    type: 'add-todo',
    payload: text
  }
}
let initialState = {
	item: []
};

function rootReducer(state = initialState, action) {
	if (action.type==='add-todo') {
		return {...state, item:[new Date().getUTCMilliseconds(), 'Test Item', false]}
	}
	return state;
}

let store = createStore(rootReducer);
console.log(store.getState())

let testAction = addTodoAction("Test Action");
store.dispatch(testAction);
console.log(store.getState());

/*const mytodo = (
  <Provider store={store}>
   <MyToDo />
  </Provider>
)


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
  render() {
    return (
      <Wrapper>
        <header className="header">
		    <h1>todos</h1>
		    <input className="new-todo" placeholder="What needs to be done?" autoFocus></input>
	      </header>    
      </Wrapper> 
    );
  }  
}

ReactDOM.render(
  mytodo,
  document.getElementById('root')
);*/
