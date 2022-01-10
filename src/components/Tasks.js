import React, {useState}  from "react";
import { connect } from "react-redux";

import Task from "./Task";

const Tasks = ({ posts }) => {
  const [count, setCount] = useState('all');
	return (
		<React.Fragment> 
		  {  posts.filter(post => { 
					 if ( count==='all' ) { 
						 return true; 
					 } 
				   if ( count==='active' ) {
						 if(post.complited===false) {
							 return true; 
						 }
					 } 
				   if ( count==='completed' ) { 
						 if(post.complited===true) {
						 return true; 
						 }
					 } 
				}
				).map(item => 
				<Task task = { item } key = { item.id }	/> ) }
			<button onClick={() => setCount({count : 'all'})}>
			  All
			</button>
			<button onClick={() => setCount({count : 'active'})}>
			  Active
			</button>
			<button onClick={() => setCount({count : 'completed'})}>
			  Completed
			</button>			 
		</React.Fragment>
		     );
	}
									
	
const mapStateToProps = state => {
	return {
		posts : state.tasks
	}
}

export default connect(mapStateToProps,null)(Tasks);
