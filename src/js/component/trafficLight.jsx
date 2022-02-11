import React, { useState } from "react";
import PropTypes from "prop-types";

const TrafficLight = (props) => {
	return (
		<div className="container ">
			<div className="row col-2 p-3 mb-2 bg-dark text-white">
				<div className="bg-danger rounded-circle circle">
					{props.turnOn}
					<button className="circle rounded-circle bg-danger">
						click aqui
					</button>
				</div>
			</div>
			<div className="row col-2 p-3 mb-2 bg-dark text-white">
				<div className="bg-warning rounded-circle circle">
					{props.turnOn}
					<button className="circle rounded-circle bg-danger redon">
						click aqui
					</button>
				</div>
			</div>
			<div className="row col-2 p-3 mb-2 bg-dark text-white ">
				<div className="bg-success rounded-circle circle">
					{props.turnOn}
				</div>
			</div>
		</div>
	);
};
TrafficLight.propTypes = {
	turnOn: PropTypes.string,
};

export default TrafficLight;
