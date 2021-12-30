import React from "react";
import { connect } from "react-redux";

import Task from "./Task";

const Tasks = ({ addedTasks }) => {
	return ( 
		addedTasks.map(task => 
		  <Task 
			  task = { task.title } 
			  key = { task.id }
			/>
		)
	);
}
const mapStateToProps = state => {
	return {
		addedTasks : state.tasks
	}
}
export default connect(mapStateToProps,null)(Tasks);
