import React from "react";
import { FaTrashAlt, FaCheck, FaRedoAlt } from "react-icons/fa";

const Design = () => {
	return (
		<>
			<div className="container">
				<input type="text" className="txtb" placeholder="add a tast" />
				<button type="submit" className="btn">
					{" "}
					Submit
				</button>
				<div className="notcomp">
					<h3> Not completed</h3>
					<div className="task">
						task
						<FaTrashAlt className="icon" />
						<FaCheck className="icon" />
					</div>

					<div className="comp">
						<h3> Completed</h3>
						<div className="task">
							task
							<FaTrashAlt className="icon" />
							<FaRedoAlt className="icon" />
						</div>
						<button type="submit" className="btn">
							{" "}
							clear list
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default Design;
