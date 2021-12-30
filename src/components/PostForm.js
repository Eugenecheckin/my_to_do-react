import React from 'react';
import { connect } from 'react-redux';

import { Button, Input, InputLabel } from '@mui/material';

import addTodoAction from '../store/Action'

class Postform extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
	}
	SubmitHendler = (event) => {
		event.preventDefault();
		const title = this.state;		
		const payload = {
			title,
			id: new Date().getMilliseconds(),
			checked : false
		};
		this.props.addTodoAction(payload);
		this.setState({title: ""});
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
						type = "submit"
					>
				  	Добавить
					</Button>
				</form>
			</div>		
		);
	}
}
const mapDispatchToProps = {
	addTodoAction
}
export default connect(null,mapDispatchToProps)(Postform);
