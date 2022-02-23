import React, { useState } from "react";

const Lights = () => {
	const [addLight, setAddLight] = useState("");
	const [lightOn, setLightOn] = useState("green");

	return (
		<div className="environment">
			<div className="trafficbar"></div>
			<div className="trafficlight">
				<span
					onClick={() => setlightOn("red")}
					className={
						"light red" + (lightOn == "red" ? " glow" : "")
					}></span>
				<span
					onClick={() => setLightOn("yellow")}
					className={
						"light yellow" +
						(lightOn == "yellow" ? " glow" : "")
					}></span>
				<span
					onClick={() => setLightOn("green")}
					className={
						"light green" +
						(lightOn == "green" ? " glow" : "")
					}></span>
				<span
					className={addLight}
					onClick={() => setLightOn("purple")}></span>
			</div>
			<div>
				<button
					onClick={() =>
						setAddLight(
							"light purple" +
								(lightOn == "purple" ? " glow" : "")
						)
					}>
					want a light extra?
				</button>
			</div>
		</div>
	);
};

export default Lights;
