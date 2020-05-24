import React, { useState } from "react";
import Alert from "./component/Alert";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";

import uuid from "uuid/dist/v4";

import "./App.css";

const initialTask = () => [];

function App() {
	//set up states

	//initial task template
	const [tasks, setTasks] = useState(initialTask);
	//initiatial completed template

	//items in the to do list
	const [chore, setChore] = useState("");

	//editing the to do list
	const [edit, setEdit] = useState(false);

	//alerts with every action
	const [alert, setAlert] = useState({ show: false });
	//setting the id
	const [id, setId] = useState(0);

	//set up functionality

	/** get value from submit */
	const handleChore = (e) => {
		setChore(e.target.value);
	};

	//alert button
	const handleAlert = ({ type, text }) => {
		setAlert({ show: true, type, text });
		setTimeout(() => {
			setAlert({ show: false });
		}, 3000);
	};

	/** handle submit  */

	const handleSubmit = (e) => {
		e.preventDefault();
		if (chore !== "") {
			if (edit) {
				let singleTask = tasks.map((item) => {
					return item.id === id ? { ...item, chore } : item;
				});
				setTasks(singleTask);
				setEdit(false);
			} else {
				const tempChore = { id: uuid(), chore };
				setTasks([...tasks, tempChore]);
			}

			setChore("");
			handleAlert({ type: "success", text: "task added" });
		} else {
			//handle alert
			handleAlert({ type: "danger", text: `please enter a task` });
		}
	};
	// button to edit  tasks
	const handleEdit = (id) => {
		let tempTask = tasks.find((item) => item.id === id);
		let { chore } = tempTask;
		setChore(chore);
		setEdit(true);
		setId(id);
	};

	// delete button

	const handleDelete = (id) => {
		const tempItem = tasks.filter((item) => item.id !== id);
		setTasks(tempItem);
		handleAlert({ type: "danger", text: "Item deleted" });
	};
	//clear all item from list
	const clearList = () => {
		setTasks([]);
		handleAlert({ type: "danger", text: "all items deleted" });
	};

	return (
		<div>
			<span className="comp">
				<h1>To Do List </h1>{" "}
			</span>
			{alert.show && <Alert type={alert.type} text={alert.text} />}
			<TaskForm
				chore={chore}
				handleChore={handleChore}
				handleSubmit={handleSubmit}
				edit={edit}
			/>
			<TaskList
				tasks={tasks}
				handleEdit={handleEdit}
				handleDelete={handleDelete}
				clearList={clearList}
			/>
		</div>
	);
}

export default App;
