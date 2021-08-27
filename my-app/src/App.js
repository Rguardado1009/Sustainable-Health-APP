import React, { useState, useEffect } from "react";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [brands, setBrands] = useState([]);
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		fetch("https://polar-beyond-77738.herokuapp.com/brands")
			.then((response) => response.json())
			.then((brands) => setBrands(brands));
	}, []);
	useEffect(() => {
		fetch("https://polar-beyond-77738.herokuapp.com/Questions")
			.then((response) => response.json())
			.then((questions) => setQuestions(questions));
	}, []);

	const [setPage] = useState("/");

	return (
		<div>
			<Nav className="navbar" onChangePage={setPage} />
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
