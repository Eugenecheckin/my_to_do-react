import {Wrapper} from './styles/Component.style.js'
import React from 'react';
import Postform from './components/PostForm';
import Tasks from './components/Tasks.js';


function App() {
  return (
    <div className='app'>
      <div className="input-form">      
        <Postform/>
      </div>
      <div className='todo-tasks'>
        <Tasks/>
      </div>
    </div>    
  );
}

export default App;
