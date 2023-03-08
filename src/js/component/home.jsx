import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({segundos}) => {
	return (
		<div className="text-center">
		<h1>Simple Counter</h1>
		<button className=" btn btn-info">⏰</button>
		<button className=" btn btn-info">{Math.floor(segundos / 30) % 10}</button>
		<button className=" btn btn-info">{Math.floor(segundos / 20) % 10}</button>
		<button className=" btn btn-info">{Math.floor(segundos / 10) % 10}</button>
		<button className=" btn btn-info">{segundos % 10}</button>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
