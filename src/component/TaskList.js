import React from "react";
import Item from "./TaskItem";
import { MdDelete } from "react-icons/md";

const TaskList = ({ tasks, handleEdit, handleDelete, clearList }) => {
	return (
		<div className="container">
			<ul className="notcomp">
				{tasks.map((item) => (
					<Item
						key={item.id}
						task={item}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				))}
			</ul>
			<span>
				{tasks.length > 0 ? (
					<span>
						<button className="btn" onClick={clearList}>
							clear Items <MdDelete className="btn-icon" />
						</button>
						<h1>you have {tasks.length} on your list </h1>
					</span>
				) : (
					<h1>you have {tasks.length} on your list </h1>
				)}
			</span>
		</div>
	);
};
export default TaskList;
