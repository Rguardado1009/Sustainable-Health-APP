import React from "react";
import styled from "styled-components";

const Img = styled.img`
	width: 540px;
	height: 540px;
`;

function AdviceCard({ brand }) {
	return (
		<div>
			<h3>{brand.brand}</h3>
			<Img src={brand.image} />
			<p> Price Range: {brand.price}</p>
			<p>Brand Type: {brand.type}</p>
		</div>
	);
}

export default AdviceCard;
