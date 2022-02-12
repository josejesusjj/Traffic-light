import React, { useState } from "react";
import PropTypes from "prop-types";

const TrafficLight = (props) => {
	const [Activating, setActivating] = useState("bg-danger");

	return (
		<div className="container ">
			<div className="row col-2 p-3 mb-2 bg-dark text-white">
				<div className="${Activating} rounded-circle circle">
					{props.turnOn}
					<button className="circle rounded-circle bg-danger"></button>
				</div>
			</div>
			<div className="row col-2 p-3 mb-2 bg-dark text-white">
				<div className="bg-warning rounded-circle circle">
					{props.turnOn}
					<button className="circle rounded-circle bg-warning redon"></button>
				</div>
			</div>
			<div className="row col-2 p-3 mb-2 bg-dark text-white ">
				<div className="bg-success rounded-circle circle">
					{props.turnOn}
					<button className="circle rounded-circle bg-success redon"></button>
				</div>
			</div>
		</div>
	);
};
TrafficLight.propTypes = {
	turnOn: PropTypes.string,
};

export default TrafficLight;
