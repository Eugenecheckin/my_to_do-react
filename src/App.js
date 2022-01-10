import React from 'react';

import { Button } from '@mui/material';

import Postform from './components/PostForm';
import Tasks from './components/Tasks.js';

import { Wrapper } from './styles/Component.style.js'
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();	
  return (
    <div className = "app">
    <Wrapper>
      <div className = "input-task">      
        <Postform />
      </div>
      <div className = "todo-tasks">        
        <Tasks />
        <Button
        onClick= { () => { dispatch( {
						                               type: 'page-checked',
																					 payload: { 
                                                      filterPost : "all"
																					          }																						  
					                              }
					                            ) 
					                  } 
				          }
        > 
          All
        </Button>
        <Button
        onClick= { () => { dispatch( {
						                               type: 'page-checked',
																					 payload: { 
                                                      filterPost : "active"
																					          }																						  
					                              }
					                            ) 
					                  } 
				          }        
        >
          Active
        </Button> 
        <Button
        onClick= { () => { dispatch( {
						                               type: 'page-checked',
																					 payload: { 
                                                      filterPost : "completed"
																					          }																						  
					                              }
					                            ) 
					                  } 
				          }
        >
          Completed
        </Button>         
      </div>
      </Wrapper>
    </div>  
  );
}

export default App;
