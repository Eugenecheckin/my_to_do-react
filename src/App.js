import React from 'react';

import Postform from './components/PostForm';
import Tasks from './components/Tasks.js';

import {Wrapper} from './styles/Component.style.js'

const App = () => {
  return (
    <div className = "app">
      <div className = "input-task">      
        <Postform />
      </div>
      <div className = "todo-tasks">
        <Tasks />
      </div>
    </div>    
  );
}

export default App;
