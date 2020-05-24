import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const TaskItem = ({ task, handleEdit, handleDelete, handleCheck }) => {
	const { chore, id } = task;
	return (
		<section>
			<li className="task">
				{chore}

				<FaTrashAlt className="icon" onClick={() => handleDelete(id)} />
				<FaEdit className="icon" onClick={() => handleEdit(id)} />
			</li>
		</section>
	);
};
export default TaskItem;
