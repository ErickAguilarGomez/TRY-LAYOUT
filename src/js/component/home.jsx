import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navegation from "../Utils/Navegation";
import Main from "../Utils/Main";
import Cards from "../Utils/Cards";
import Footer from "../Utils/Footer";

//create your first component
const Home = () => {
	return (
		<>
		<Navegation></Navegation>
		<Main/>
		<Cards></Cards>
		<Footer></Footer>
		</>
	);
};

export default Home;
