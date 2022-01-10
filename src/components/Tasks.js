import React from "react";
import { connect } from "react-redux";

import Task from "./Task";
import { postsSelector, postsSelectedSelector, postsUnselectedSelector } from "../selectors/selectorPosts";

const Tasks = ({ posts, postsSelected, postsUnselected, filter }) => {
	console.log( filter );	 

	if (filter==='all') {
		return ( 
						posts.map(task => 
						   				<Task 
											  task = { task } 
												key = { task.id }
											/>
											)																			
						);
	}
									
	if (filter==='completed') {
		return ( 
						postsSelected.map(task => 
						                  	<Task 
																	task = { task } 
																	key = { task.id }
																/>
														 	)
						);
	}
											 
	if (filter==='active') {
		return ( 																	
						postsUnselected.map(task => 
																	<Task 
																		task = { task } 
																		key = { task.id }
																	/>
														 		)
						);	
	}										 
												 										 
	return ( 
			    posts.map(task => 
					         		<Task 
						         		task = { task } 
						         		key = { task.id }
					         		/>
				            )
			    );	 	
}
const mapStateToProps = state => {
	return {
		posts : postsSelector(state),
		postsSelected : postsSelectedSelector(state),
		postsUnselected : postsUnselectedSelector(state),
		filter : state.filterPost
	}
}

export default connect(mapStateToProps,null)(Tasks);
