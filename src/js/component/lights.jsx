import React, { useState } from "react";

const Lights = () => {
	return (
		<div className="container ">
			<div className="row col-2 p-3 mb-2 bg-dark text-white h-50">
				<div className="row bg-danger rounded-circle">
					<p>p</p>
					<p>p</p>
					<p>p</p>
				</div>
			</div>
			<div className="row col-2 p-3 mb-2 bg-dark text-white">
				<div className="bg-warning rounded-circle">
					<p>p</p>
					<p>p</p>
					<p>p</p>
				</div>
			</div>
			<div className="row col-2 p-3 mb-2 bg-dark text-white ">
				<div className="bg-success rounded-circle">
					<p>p</p>
					<p>p</p>
					<p>p</p>
				</div>
			</div>
		</div>
	);
};

export default Lights;
