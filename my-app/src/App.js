import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [brands, setBrands] = useState([]);
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/brands")
			.then((response) => response.json())
			.then((brands) => setBrands(brands));
	}, []);
	useEffect(() => {
		fetch("http://localhost:8000/Questions")
			.then((response) => response.json())
			.then((questions) => setQuestions(questions));
	}, []);

	const [page, setPage] = useState("/")

	// function getCurrentPage() {
	// 	switch(page) {
	// 		case "/":
	// 			return <Home />
	// 		case "/about":
	// 			return <About />
	// 		default:
	// 			return <h1>404 not found</h1>
	// 	}
	// }

	return (
		<div>
			<Nav className="navbar" onChangePage={setPage}/>
			{/* {getCurrentPage()} */}
			<br></br>
			<br></br>
			<p>Going green? Check your</p>
			<h1 className="title">Sustainable Health Score</h1>
			<Home brands={brands} questions={questions} />
			<Footer />
		</div>
	);
}
export default App;
