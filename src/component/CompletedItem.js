import React from "react";
import { FaRedoAlt, FaTrashAlt } from "react-icons/fa";

const TaskItem = ({ task }) => {
	const { item } = task;
	return (
		<section>
			<li className="task">
				{" "}
				{item} <FaTrashAlt className="icon" />
				<FaRedoAlt className="icon" />
			</li>{" "}
		</section>
	);
};
export default TaskItem;
