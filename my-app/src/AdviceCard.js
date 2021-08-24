import React from "react";
import styled from "styled-components";

const Img = styled.img`
	width: 540px;
	height: 540px;
`;

function AdviceCard({ brand }) {
	return (
		<div>
			<Img src={brand.item_url} />
			<p> Price: $ {brand.price}</p>
			<p>Brand Type: {brand.type}</p>
		</div>
	);
}

export default AdviceCard;
