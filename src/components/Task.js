import React from "react";
import {useSelector, useDispatch } from 'react-redux';

import { Button, Checkbox, ListItem } from '@mui/material';
import {ContentContainer} from '../styles/Component.style.js'
	
function Task({ task }) {
	const selector = useSelector(state => 
		                             state.tasks.find(element => 
																	 {
																		 if ( element.id === task.id ) {
																			 return true; 
																	   }
																	 }
																 )
															);
	const dispatch = useDispatch();	
	return (
		<div className = "todo-item">
		  <ContentContainer>
			  <Checkbox
					onChange= { () => { dispatch( {
						                               type: 'set-checked',
																					 payload: { 
																						          id : selector.id,
																											checked : selector.checked
																					          }																						  
					                              }
					                            ) 
					                  } 
					 					}
				/>
			  <ListItem className = "text-item">
				  { selector.title }
			  </ListItem>
				<Button 
				 onClick= { () => { dispatch( {
						                               type: 'del-checked',
																					 payload: { 
																						          id : selector.id
																					          }																						  
					                              }
					                            ) 
					                  } 
				          }				 
				>

				  &times;

				</Button>
			</ContentContainer>
		</div>		
	);
}

export default (Task);
