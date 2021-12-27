import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Wrapper} from './component.style.js'

class Element extends React.Component {  
  render () {
      return (
        <Wrapper>
          <div>
            Welcome
          </div>
        </Wrapper>        
      );
    }
}

ReactDOM.render(
  <Element />,
  document.getElementById('root')
);



