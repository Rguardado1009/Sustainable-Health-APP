import React, { useState } from "react";

function AdviceCard({ brand }) {
	const [likeBtn, setLikeBtn] = useState(0);
	const [dislikeBtn, setDislikeBtn] = useState(0);

	const [commentList, setCommentList] = useState([]);
	const [commentText, setCommentText] = useState("");

	function addComment() {
		return (
			<div className="comments">
				<p>{commentList}</p>
			</div>
		);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setCommentList([...commentList, commentText]);
	}

	return (
		<div className="advice-cards">
			<h3>{brand.brand}</h3>
			<img className="brand-images" src={brand.image} alt={brand.name} />
			<p> Price Range: {brand.price}</p>
			<p>Brand Type: {brand.type}</p>
			<span className="voteBtns">
				<button onClick={() => setLikeBtn(likeBtn + 1)}>{likeBtn} 👍</button>
				<button onClick={() => setDislikeBtn(dislikeBtn + 1)}>
					{dislikeBtn} 👎
				</button>
			</span>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={commentText}
					onChange={(e) => setCommentText(e.target.value)}
					placeholder="Leave a comment"
				/>
				<input type="submit" value="Post" />
			</form>
			{addComment()}
		</div>
	);
}

export default AdviceCard;
