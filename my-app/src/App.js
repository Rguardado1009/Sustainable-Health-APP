import React, { useState, useEffect } from "react";
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

	console.log(brands);
	console.log(questions);

	return (
		<div>
			<h1 className="title">Sustainable Health Score</h1>
			<Nav className="navbar" />
			<Home brands={brands} questions={questions} />
			<About />
			<Footer />
		</div>
	);
}
export default App;
