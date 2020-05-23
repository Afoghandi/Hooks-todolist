import React from "react";
import { FaCheck, FaTrashAlt, FaEdit } from "react-icons/fa";

const TaskItem = ({ task }) => {
	const { chore } = task;
	return (
		<section>
			<div className="task">
				{chore}
				<FaTrashAlt className="icon" />
				<FaCheck className="icon" />
				<FaEdit className="icon" />
			</div>
		</section>
	);
};
export default TaskItem;
