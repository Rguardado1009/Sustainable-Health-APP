import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
} from "./SignupInfo";

export function SignupForm(props) {
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const account = { user, email, password, confPassword };
		fetch("http://localhost:8000/Account", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(account),
		});
	};

	return (
		<BoxContainer>
			<FormContainer>
				<Input
					type="text"
					placeholder="Full Name"
					required
					value={user}
					onChange={(e) => setUser(e.target.value)}
				/>
				<Input
					type="email"
					placeholder="Email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Confirm Password"
					required
					value={confPassword}
					onChange={(e) => setConfPassword(e.target.value)}
				/>
			</FormContainer>
			<SubmitButton type="submit" onClick={handleSubmit}>
				<Link to="/quiz"> Start</Link>
			</SubmitButton>

			<MutedLink href="Home.js">
				Already have an account?
				<BoldLink>Signin</BoldLink>
			</MutedLink>
			<p>{user}</p>
			<p>{email}</p>
			<p>{password}</p>
			<p>{confPassword}</p>
		</BoxContainer>
	);
}
