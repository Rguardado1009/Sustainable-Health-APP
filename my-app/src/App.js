import React, { useState, useEffect } from "react";
import Home from "./Home";


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

console.log(brands)
console.log(questions)

	return (
		<div>
			<Home brands={brands} questions={questions}/>
            
		</div>
	);
}
export default App;
