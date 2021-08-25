import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

function Questionnaire({
	question,
	handleNext,
	handlePrev,
	showNext,
	showButton,
	questionIndex,
	increaseScore,
	Score,
}) {
	const [takeQuiz, setTakeQuiz] = useState(questionIndex > 0 ? false : true);

	return (
		<div>
			{takeQuiz ? (
				<button onClick={() => setTakeQuiz(!takeQuiz)}>Take Quiz</button>
			) : (
				<div>
					<h4>{question.question}</h4>
					<button onClick={increaseScore}>{question.answer1}</button>
					<button onClick={increaseScore}>{question.answer2}</button>
					<button onClick={increaseScore}>{question.answer3}</button>
					<button onClick={increaseScore}>{question.answer4}</button>
					<div>
						{/* <button onClick={handlePrev}> Previous</button> */}
						{showButton ? <button onClick={handleNext}> Next</button> : null}
					</div>
					{/* questions 1 hold highest value of 5 point
			next question 4
			next question 3
			next question 2
			 */}
				</div>
			)}
		</div>
	);
}
export default Questionnaire;
