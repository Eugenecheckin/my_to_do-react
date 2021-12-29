import './App.css';
import {Wrapper} from './Component.style.js'

import React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux';

import rootReducer from './Reducer'
import addTodoAction from './Action';

export let store = createStore(rootReducer);
console.log(store.getState())
let testAction = addTodoAction("Test Action");
store.dispatch(testAction);
console.log(store.getState());


/*const mytodo = (
  <Provider store={store}>
   <MyToDo />
  </Provider>*/


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

class ToDo extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
			todos : [ { 
				          id:1, 
									title:"test", 
									complete:false 
								} 
							] 
						}
  }
  render(props) {
    return (
      <Wrapper>
        <header className="header">				
		    <h1>todos</h1>
		    <input className="new-todo" 
				       placeholder="What needs to be done?" 
							 autoFocus>
				</input>
	      </header>  
      </Wrapper> 
    );
  }  
}



function App() {
  return (
    <div className="App">
		  <ToDo/>   
    </div>
  );
}

export default App;
