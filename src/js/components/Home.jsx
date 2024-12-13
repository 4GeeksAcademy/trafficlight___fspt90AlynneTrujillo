import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[chosenColor, setChosenColor] = useState("red");
	return (
		<div className="container">
			<div className="trafficLightPole"></div>
			<div className="trafficLight">
				<div onClick={() => setChosenColor("red")}
			 	className={"light red" + (chosenColor === "red" ? " lightGlows" : "")}></div>
				<div onClick={() => setChosenColor("yellow")}
				className={"light yellow" + (chosenColor === "yellow" ? " lightGlows" : "")}></div>
				<div onClick={() => setChosenColor("green")}
				className={"light green" + (chosenColor === "green" ? " lightGlows" : "")}></div>
			</div>
		</div>
	);
};

export default Home;