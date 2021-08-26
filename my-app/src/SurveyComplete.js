import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const H1 = styled.h1`
	display: Flex;
	align-items: center;
	justify-content: center;
	font-family: "Roboto Mono", monospace;
	font-size: 40px;
	font-weight: 30;
`;
const H2 = styled.h2`
	display: Flex;
	align-items: center;
	justify-content: center;
	font-family: "Roboto Mono", monospace;
	font-size: 20px;
	font-weight: 30;
`;
const Image = styled.img`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
`;

function SurveyComplete() {
	return (
		<div>
			<H1>You've Completed Our Survey !</H1>
			<br></br>
			<Image src="https://p.kindpng.com/picc/s/3-30730_competition-clipart-congratulation-congratulations-png-hd-transparent-png.png" />
			<br></br>
			<H2> to view sustainable products</H2>
			<Link className="surveycomp" to="/products">
				Click Here
			</Link>
		</div>
	);
}
export default SurveyComplete;
