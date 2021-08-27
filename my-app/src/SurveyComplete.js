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
const H3 = styled.h3`
	display: Flex;
	align-items: center;
	justify-content: center;
	font-family: "Roboto Mono", monospace;
	font-size: 20px;
	font-weight: 20;
`;
const Image = styled.img`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 75%;
	height: auto;
	margin-left: auto;
	margin-right: auto;
`;

function SurveyComplete() {
	return (
		<div>
			<H2>You've Completed Our Survey !</H2>
			<br></br>
			<Image src="https://50a8d2.medialib.edu.glogster.com/vYUaU22mmWRLyZeanSFP/media/67/67a220dd5d8bed1c30981da69994d9231c168d1f/congratulations-text.png" />
			<br></br>
			<H2> to view sustainable products</H2>
			<br></br>
			<Link className="surveycomp" to="/products">
				Click Here
			</Link>
		</div>
	);
}
export default SurveyComplete;
