import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import AdviceCard from "./AdviceCard";
import Questionnaire from "./Questionnaire";

function Home({ brands, questions }) {
	return (
		<div>
			<div className="MainCont">
				<div className="questionCont">
					{questions.map((question) => (
						<Questionnaire key={question.id} question={question} />
					))}
				</div>
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
