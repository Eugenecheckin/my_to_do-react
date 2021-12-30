import { FormControl, Input, InputLabel } from '@mui/material';
import React from 'react';

class Postform extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	render() {
		return(
			<div>
				<h1>todos</h1>
				<FormControl>			
  				<InputLabel htmlFor="my-input">What needs to be done?</InputLabel>
  				<Input id="my-input" aria-describedby="my-helper-text" />
				</FormControl>
				</div>		
		);
	}
}
export default Postform;

