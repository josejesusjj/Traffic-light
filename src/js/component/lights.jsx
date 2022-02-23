import React, { useState } from "react";

const Lights = () => {
	const [addLight, setAddLight] = useState("");
	const [selectedColor, setSelectedColor] = useState("green");

	return (
		<div className="environment">
			<div className="trafficbar"></div>
			<div className="trafficlight">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"light red" + (selectedColor == "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light yellow" +
						(selectedColor == "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light green" +
						(selectedColor == "green" ? " glow" : "")
					}></div>
				<div
					className={addLight}
					onClick={() => setSelectedColor("purple")}></div>
			</div>
			<div>
				<button
					onClick={() =>
						setAddLight(
							"light purple" +
								(selectedColor == "purple" ? " glow" : "")
						)
					}>
					want a light extra?
				</button>
			</div>
		</div>
	);
};

export default Lights;
