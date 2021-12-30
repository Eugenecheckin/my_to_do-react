import { Button, Input, InputLabel } from '@mui/material';
import React from 'react';

class Postform extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
	}
	SubmitHendler = (event) => {
		event.preventDefault();
		console.log(this.state.title);
	}
	ChangeInputHandler = (event) => { 		
		event.persist();
		this.setState(prev => (
				{ ...prev, 
				  ...{[event.target.name] : [event.target.value]}
				}
			)
		);
	}
	render() {
		return (
			<div>
				<h1>todos</h1>
				<form onSubmit = { this.SubmitHendler }>			
  				<InputLabel 
					  htmlFor = "input-task__label">What needs to be done?
					</InputLabel>
  				<Input 
					  aria-describedby = "input-task__helper"
						className = "input-task"
						type = "text"
					  id = 'title'
						value = { this.state.title }						
						name = "title"
						onChange = { this.ChangeInputHandler } 							
					/>
					<Button 
					  className = "input-task__btn" 
						type = "submit" >Добавить
					</Button>
				</form>
			</div>		
		);
	}
}
export default Postform;

