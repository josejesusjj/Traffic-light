import React, { useState } from "react";
import Lights from "./lights.jsx";
import TrafficLight from "./trafficLight.jsx";

//my components
const Home = () => {
	return (
		<div>
			<Lights />
			<TrafficLight />
		</div>
	);
};

export default Home;
