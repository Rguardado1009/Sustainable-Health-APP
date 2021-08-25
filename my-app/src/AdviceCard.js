import React, { useState } from "react";
import Comments from "./Comments";

function AdviceCard({ brand }) {
	const [likeBtn, setLikeBtn] = useState(0)
	const [dislikeBtn, setDislikeBtn] = useState(0)	
	return (
		<div className="advice-cards">
			<h3>{brand.brand}</h3>
			<img className="brand-images" src={brand.image} />
			<p> Price Range: {brand.price}</p>
			<p>Brand Type: {brand.type}</p>
			<a href={brand.item_url}>Shop Now</a>
			<span className="voteBtns">
                <button onClick={() => setLikeBtn(likeBtn + 1)}>{likeBtn}  👍</button>
                <button onClick={() => setDislikeBtn(dislikeBtn + 1)}>{dislikeBtn}  👎</button>
            </span>
			<Comments/>
		</div>
	);
}

export default AdviceCard;
