import React from "react"

//importing objects from external.jsx files.
import Navbar from "./navbar"
import Jumbotron from "./jumbotron"
import Card from "./card"
import Footer from "./footer"

//home function calls objects constructed by like-named .jsx files.
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container-fluid mb-5">
				<div className="row">
					<Card className="p-1" />
  				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;