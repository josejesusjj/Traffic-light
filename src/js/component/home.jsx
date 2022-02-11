import React, { useState } from "react";
import Lights from "./lights.jsx";
import Click from "./click.jsx";

//my components
const Home = () => {
	return (
		<div>
			<Lights />
			<Click />
		</div>
	);
};

export default Home;
