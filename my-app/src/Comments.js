import React, { useState } from "react";

function Comments() {
	const [commentList, setCommentList] = useState([]);
	const [commentText, setCommentText] = useState("");

	function addComment() {
		return (
			<ul className="comments">
				{commentList.map((comment) => (
					<p>{comment}</p>
				))}
			</ul>
		);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setCommentText("");
		addComment(commentText);
		setCommentList([...commentList, commentText]);
	}

	return (
		<div className="Advice Comments">
			<form onSubmit={handleSubmit}>
				<input
					className="formInput"
					type="text"
					value={commentText}
					onChange={(e) => setCommentText(e.target.value)}
					placeholder="Leave a comment"
				/>
				<input className="commentSubmit" type="submit" value="Post" />
			</form>
			{addComment()}
		</div>
	);
}
export default Comments;
