import React, { useState } from "react";

const Lights = () => {
	const [lightOn, setLightOn] = useState("");
	const [addLight, setAddLight] = useState("");

	return (
		<div className="environment">
			<div className="trafficbar"></div>
			<div className="trafficlight">
				<div
					onClick={() => setLightOn("red")}
					className={
						"light red" + (lightOn == "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setLightOn("yellow")}
					className={
						"light yellow" + (lightOn == "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setLightOn("green")}
					className={
						"light green" + (lightOn == "green" ? " glow" : "")
					}></div>
				<div
					className={
						addLight +
						" purple" +
						(lightOn == "purple" ? " glow" : "")
					}
					onClick={() => setLightOn("purple")}></div>
			</div>
			<br></br>
			<br></br>
			<button onClick={() => setAddLight("light")}>
				want a light extra?
			</button>
		</div>
	);
};

export default Lights;
