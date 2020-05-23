import React from "react";

const TaskForm = ({ chore, handleChore, handleSubmit }) => {
	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<label htmlFor="chore"></label>{" "}
				<input
					type="text"
					className="txtb"
					placeholder="e.g. Shopping"
					id="chore"
					name="chore"
					value={chore}
					onChange={handleChore}
				/>
				<button type="submit" className="btn">
					{" "}
					Submit
				</button>
			</form>
		</div>
	);
};
export default TaskForm;
