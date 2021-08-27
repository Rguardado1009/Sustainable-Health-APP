import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdviceCard from "./AdviceCard";
import Questionnaire from "./Questionnaire";
import Signup from "./Signup";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import SurveyComplete from "./SurveyComplete";

function Home({ brands, questions }) {
	const [questionIndex, setQuestionIndex] = useState(0);

	const [score, setScore] = useState(0);
	const [complete, setComplete] = useState(false);

	const singleQuestion = questions
		.slice(questionIndex, questionIndex + 1)
		.map((question) => (
			<Questionnaire
				key={question.id}
				question={question}
				handleNext={handleNext}
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
						<Signup />
						<div className="circle-rating">{score}</div>
					</div>
				</Route>
				<Route exact path="/quiz">
					<div className="MainCont">
						<div className="questionCont">
							{singleQuestion}
							{complete === true && <SurveyComplete />}
						</div>
						<div className="circle-rating">{score}</div>
					</div>
				</Route>
				<Route path="*">
					<h1>404 not found</h1>
				</Route>
			</Switch>
		</div>
	);
}
export default Home;
