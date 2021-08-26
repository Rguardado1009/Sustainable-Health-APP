import React, { useContext } from "react";
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
} from "./SignupInfo";
// import { Marginer } from "../marginer";
// import { AccountContext } from "./accountContext";
// import { createContext } from "react";

export function SignupForm(props) {
	// const { switchToSignin } = useContext(createContext());

	return (
		<BoxContainer>
			<FormContainer>
				<Input type="text" placeholder="Full Name" />
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Input type="password" placeholder="Confirm Password" />
			</FormContainer>
			<SubmitButton type="submit">Signup</SubmitButton>

			<MutedLink href="#">
				Already have an account?
				<BoldLink>Signin</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}
