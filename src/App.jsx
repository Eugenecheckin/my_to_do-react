import React from 'react';

import Postform from './components/PostForm';
import Tasks from './components/Tasks';

import { AppSection, Wrapper } from './styles/Component.style';

function App() {
  return (
    <AppSection>
        <div className="app">
        <Wrapper>
          <div className="input-task">
            <Postform />
          </div>
          <div className="todo-tasks">
            <Tasks />
          </div>
        </Wrapper>
        </div>
    </AppSection>
  );
}

export default App;
