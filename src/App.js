import {Wrapper} from './styles/Component.style.js'
import React from 'react';
import Postform from './components/PostForm';
import Tasks from './components/Tasks.js';


function App() {
  return (
    <div className="app">
      <div className="input-task">      
        <Postform/>
      </div>
      <div className="todo-tasks">
        <Tasks tasks = {
          [ { id : 1, title : "first" },
            { id : 2, title : "second" },
            { id : 3, title : "third" }
          ]
          }/>
      </div>
    </div>    
  );
}

export default App;
