import React, { useState } from "react";
import Design from "./component/design";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import CompletedList from "./component/CompletedList";
import uuid from "uuid/dist/v4";

import "./App.css";

const initialTask = () => [
	{
		id: uuid(),
		item: "go shooping",
	},

	{
		id: uuid(),
		item: "go to church",
	},
];

function App() {
	const [tasks, setTask] = useState(initialTask);

	const [todoItem, setItem] = useState("");

	return (
		<div>
			<Design />
			<TaskForm />
			<TaskList tasks={tasks} />
			<CompletedList tasks={tasks} />{" "}
		</div>
	);
}

export default App;
