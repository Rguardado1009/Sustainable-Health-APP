import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import AdviceCard from "./AdviceCard";
import Questionnaire from "./Questionnaire";

function Home({ brands, questions }) {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [showButton, setShowButton] = useState(false);
	const [score, setScore] = useState(0);
	const showNext = () => {
		setShowButton(true);
	};

	const singleQuestion = questions
		.slice(questionIndex, questionIndex + 1)
		.map((question) => (
			<Questionnaire
				key={question.id}
				question={question}
				handleNext={handleNext}
				handlePrev={handlePrev}
				showNext={showNext}
				showButton={showButton}
				questionIndex={questionIndex}
				increaseScore={increaseScore}
			/>
		));

	function handleNext() {
		setQuestionIndex((questionIndex) => (questionIndex + 1) % questions.length);
	}
	function handlePrev() {
		setQuestionIndex((questionIndex) => (questionIndex - 1) % questions.length);
	}
	function increaseScore() {
		setScore(score + 5);
	}

	return (
		<div>
			<div className="MainCont">
				<div className="questionCont">{singleQuestion}</div>
				<div className="circle-rating">{score}</div>
			</div>
			<div className="adviceCont">
				{brands.map((brand) => (
					<AdviceCard key={brand.id} brand={brand} />
				))}
			</div>
		</div>
	);
}
export default Home;
