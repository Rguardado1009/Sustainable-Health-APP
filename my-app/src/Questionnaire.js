import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Questionnaire({
	question,
	handleNext,
	questionIndex,
	score,
	setScore,
}) {
	const [takeQuiz, setTakeQuiz] = useState(questionIndex > 0 ? false : true);
	const [showButton, setShowButton] = useState(false);

	function increaseScore(newScore) {
		setShowButton(true);
		setScore(() => {
			if (score + newScore > 100) {
				return score;
			} else {
				return setScore(score + newScore);
			}
		});
	}

	return (
		<div>
			{takeQuiz ? (
				<button className="QuizBtn" onClick={() => setTakeQuiz(!takeQuiz)}>
					Take Quiz
				</button>
			) : (
				<div>
					<h4>{question.question}</h4>
					<button
						className="QuizBtn"
						onClick={() => increaseScore(question.score1)}
					>
						{question.answer1}
					</button>
					<button
						className="QuizBtn"
						onClick={() => increaseScore(question.score2)}
					>
						{question.answer2}
					</button>
					<button
						className="QuizBtn"
						onClick={() => increaseScore(question.score3)}
					>
						{question.answer3}
					</button>
					<button
						className="QuizBtn"
						onClick={() => increaseScore(question.score4)}
					>
						{question.answer4}
					</button>

					<div>
						{showButton ? <button onClick={handleNext}> Next</button> : null}
					</div>
				</div>
			)}
		</div>
	);
}
export default Questionnaire;
