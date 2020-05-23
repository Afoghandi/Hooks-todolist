import React from "react";
import Item from "./CompletedItem";

const CompletedList = ({ tasks }) => {
	return (
		<div className="container">
			<ul className="comp">
				<h3> Completed </h3>{" "}
				{tasks.map((item) => (
					<Item key={item.id} task={item} />
				))}{" "}
			</ul>{" "}
			{tasks.length > 0 && (
				<button type="submit" className="btn">
					{" "}
					clear list
				</button>
			)}
		</div>
	);
};
export default CompletedList;
