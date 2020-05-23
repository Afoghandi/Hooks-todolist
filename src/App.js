import React, { useState } from "react";
//import Design from "./component/design";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import CompletedList from "./component/CompletedList";
import uuid from "uuid/dist/v4";

import "./App.css";

const initialTask = () => [
	{
		id: uuid(),
		chore: "go shooping",
	},

	{
		id: uuid(),
		chore: "go to church",
	},
];

function App() {
	//set up states
	const [tasks, setTasks] = useState(initialTask);

	const [todoItem, setItem] = useState("");

	const [alert, setAlert] = useState({ show: false });

	const [chore, setChore] = useState("");

	//set up functionality

	const handleChore = (e) => {
		setChore(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (chore !== "") {
			const tempChore = { id: uuid(), chore };
			setTasks([...tasks, tempChore]);
			setChore("");
		} else {
		}
	};

	return (
		<div>
			<TaskForm
				chore={chore}
				handleChore={handleChore}
				handleSubmit={handleSubmit}
			/>
			<TaskList tasks={tasks} />
			<CompletedList tasks={tasks} />{" "}
		</div>
	);
}

export default App;
