import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import AdviceCard from "./AdviceCard";
import Questionnaire from "./Questionnaire";

const H1 = styled.div`
text-align: center;
font-size: 50px;
`
function Home({ brands, questions }) {
	return (
		<div>
			<div>
				{questions.map((question) => (
					<Questionnaire key={question.id} question={question} />
				))}
				<div class="circle-rating">95</div>
			</div>
			<div>
				{brands.map((brand) => (
					<AdviceCard key={brand.id} brand={brand} />
				))}
			</div>
		</div>
	);
}
export default Home;
