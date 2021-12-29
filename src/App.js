import './styles/App.css';
import {Wrapper} from './styles/Component.style.js'
import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store/Constant'

/*function ToDoItem({title,id,complete}){
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
*/


function ToDo()  {
    return (
      <Wrapper>
        <header className="header">				
		    <h1>todos</h1>
		    <input className="new-todo" 
				       placeholder="What needs to be done?" 
							 autoFocus>111
				</input>
	      </header>  
      </Wrapper> 
    );  
}

function App() {
  return (
    <div className="App">
		  <Provider store={store}>
		    <ToDo/>  
		  </Provider>		   
    </div>
  );
}

export default App;
