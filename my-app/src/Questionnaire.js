import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
const Div = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding: 0 0 32px;
	margin: 48px auto 0;
	font-family: Quicksand, arial, sans-serif;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
	border-radius: 5px;

	&:hover {
		background: beige;
		color: red;
	}
`;
const StyledButton = styled(Button)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 8px 16px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	background-color: #6772e5;
	border: 1px solid #ffc0cb;
	&:hover {
		background-color: red;
	}
`;
const StyledButton1 = styled(Button)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 8px 16px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	background-color: #6772e5;
	border: 1px solid #ffc0cb;
	&:hover {
		background-color: red;
	}
`;
function Questionnaire({
	question,
	handleNext,
	handlePrev,
	showNext,
	showButton,
	questionIndex,
	increaseScore,
}) {
	const [takeQuiz, setTakeQuiz] = useState(questionIndex > 0 ? false : true);
	return (
		<div>
			{takeQuiz ? (
				<StyledButton1 onClick={() => setTakeQuiz(!takeQuiz)}>
					Take Quiz
				</StyledButton1>
			) : (
				<Div>
					<h4>{question.question}</h4>
					<StyledButton onClick={(showNext, increaseScore)}>
						{question.answer1}
					</StyledButton>
					<StyledButton onClick={showNext}>{question.answer2}</StyledButton>
					<StyledButton onClick={showNext}>{question.answer3}</StyledButton>
					<StyledButton onClick={showNext}>{question.answer4}</StyledButton>
					<div>
						{/* <button onClick={handlePrev}> Previous</button> */}
						{showButton ? <button onClick={handleNext}> Next</button> : null}
					</div>
					{/* questions 1 hold highest value of 5 point
			next question 4
			next question 3
			next question 2
			 */}
				</Div>
			)}
		</div>
	);
}
export default Questionnaire;
