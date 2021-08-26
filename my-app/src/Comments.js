import React, { useState } from "react";

function Comments() {
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
		<div className="Advice Comments">
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
export default Comments;
