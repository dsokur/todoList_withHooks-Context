import React, {useContext} from 'react';
import {TodoContext} from "../../todo-context";
import TaskItem from './../TaskItem/index'

const ComplitedList = () => {
	const toDoContext = useContext(TodoContext);

	// console.log('toDoContext.incomplete', toDoContext.state.incomplete)
	return (
		<div className='col-md-6'>
			{
				toDoContext.state.complete.map((item, index) => {
					return (
						<div key={index} className='todolist_tasklist'>
							<TaskItem item={item}/>
						</div>
					)
				})
			}
		</div>
	);
};
export default ComplitedList;