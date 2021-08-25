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
	justify-content: space-evenly;
	padding: 8px 16px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	background-color: #6772e5;
	border: 1px solid #ffc0cb;
	&:hover {
		background-color: red;
	}
`;
function Questionnaire({ question, handleNext, handlePrev }) {
	return (
		<Div>
			<h4>{question.question}</h4>
			<StyledButton>{question.answer1}</StyledButton>
			<StyledButton>{question.answer2}</StyledButton>
			<StyledButton>{question.answer3}</StyledButton>
			<StyledButton>{question.answer4}</StyledButton>
			<div>
				<button onClick={handlePrev}> Previous</button>
				<button onClick={handleNext}> Next</button>
			</div>
			{/* questions 1 hold highest value of 5 point
			next question 4
			next question 3
			next question 2
			 */}
		</Div>
	);
}
export default Questionnaire;
