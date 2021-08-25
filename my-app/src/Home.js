import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import AdviceCard from "./AdviceCard";
import Questionnaire from "./Questionnaire";

function Home({ brands, questions }) {
	const [questionIndex, setQuestionIndex] = useState(0);

	const singleQuestion = questions
		.slice(questionIndex, questionIndex + 1)
		.map((question) => (
			<Questionnaire
				key={question.id}
				question={question}
				handleNext={handleNext}
				handlePrev={handlePrev}
			/>
		));

	function handleNext() {
		setQuestionIndex((questionIndex) => (questionIndex + 1) % questions.length);
	}
	function handlePrev() {
		setQuestionIndex((questionIndex) => (questionIndex - 1) % questions.length);
	}

	return (
		<div>
			<div className="MainCont">
				<div className="questionCont">{singleQuestion}</div>
				<div className="circle-rating">95</div>
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
