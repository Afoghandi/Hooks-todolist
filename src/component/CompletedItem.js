import React from "react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";

const TaskItem = ({ task }) => {
	const { item } = task;
	return (
		<section>
			<div className="task">
				{" "}
				{item} <FaTrashAlt className="icon" />
				<FaCheck className="icon" />
			</div>{" "}
		</section>
	);
};
export default TaskItem;
