import React from "react";
import Item from "./TaskItem";

const TaskList = ({ tasks }) => {
	return (
		<div className="container">
			<div className="notcomp">
				<h3> Not completed</h3>
				{tasks.map((item) => (
					<Item key={item.id} task={item} />
				))}
			</div>
		</div>
	);
};
export default TaskList;
