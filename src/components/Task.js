import React from "react";
import { ListItem } from '@mui/material';
import { Checkbox } from '@mui/material';

export default function Task ({ task }) {
	return (
		<div className = "todo-item">
			<Checkbox />
			<ListItem 
			  className = "text-item">{ task.title }
			</ListItem>
		</div>		
	);
}