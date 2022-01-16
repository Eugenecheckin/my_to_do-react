import React from 'react';

import Postform from './components/PostForm';
import Tasks from './components/Tasks';

import { LogoWraper, Wrapper } from './styles/Component.style';

function App() {
  return (
    <>
    <LogoWraper>
      todos
    </LogoWraper>
    <Wrapper>
      <div className="app">
        <div className="input-task">
          <Postform />
        </div>
        <div className="todo-tasks">
          <Tasks />
        </div>
      </div>
    </Wrapper>
    </>
  );
}

export default App;
