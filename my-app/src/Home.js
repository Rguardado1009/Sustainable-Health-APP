import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdviceCard from "./AdviceCard";
import Questionnaire from "./Questionnaire";
import { SignupForm } from "./SignupForm";
import { Switch, Route } from "react-router-dom";
import About from "./About";

function Home({ brands, questions }) {
	const [questionIndex, setQuestionIndex] = useState(0);

	const [score, setScore] = useState(0);
	const [complete, setComplete] = useState(false);
	// const showNext = () => {};

	const singleQuestion = questions
		.slice(questionIndex, questionIndex + 1)
		.map((question) => (
			<Questionnaire
				key={question.id}
				question={question}
				handleNext={handleNext}
				handlePrev={handlePrev}
				questionIndex={questionIndex}
				score={score}
				setScore={setScore}
			/>
		));

	function handleNext() {
		setQuestionIndex((questionIndex) => {
			if (questionIndex < 19) {
				return (questionIndex + 1) % questions.length;
			} else {
				setComplete(true);
			}
		});
	}
	function handlePrev() {
		setQuestionIndex((questionIndex) => (questionIndex - 1) % questions.length);
	}

	return (
		<div>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/products">
					<div className="adviceCont">
						{brands.map((brand) => (
							<AdviceCard key={brand.id} brand={brand} />
						))}
					</div>
				</Route>
				<Route exact path="/">
					<div className="MainCont">
						<div className="questionCont">{singleQuestion}</div>
						{complete === true && <SignupForm />}
						<div className="circle-rating">{score}</div>
					</div>
				</Route>
				<Route path="*">
					<h1>404 not found</h1>
				</Route>
			</Switch>
		</div>

		// <div>
		// 	<div className="MainCont">
		// 		<div className="questionCont">{singleQuestion}</div>
		// 		<div className="circle-rating">{score}</div>
		// 		{complete === true && <SignupForm />}
		// 	</div>
		// 	<div className="adviceCont">
		// 		{brands.map((brand) => (
		// 			<AdviceCard key={brand.id} brand={brand} />
		// 		))}
		// 	</div>
		// </div>
	);
}
export default Home;
