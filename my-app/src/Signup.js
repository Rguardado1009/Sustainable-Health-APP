import React from "react";
import styled from "styled-components";
import { SignupForm } from "./SignupForm";

const BoxContainer = styled.div`
	width: 280px;
	min-height: 550px;
	display: flex;
	flex-direction: column;
	border-radius: 19px;
	background-color: #fff;
	box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
	position: relative;
	overflow: hidden;
`;

const TopContainer = styled.div`
	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 0 1.8em;
	padding-bottom: 5em;
`;

const BackDrop = styled.div`
	width: 160%;
	height: 550px;
	position: absolute;
	display: flex;
	flex-direction: column;
	border-radius: 50%;
	transform: rotate(60deg);
	top: -290px;
	left: -70px;
	background: rgb(241, 196, 15);
	background: linear-gradient(58deg, #82d973 20%, #82d973 100%);
`;

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const HeaderText = styled.h2`
	font-size: 30px;
	font-weight: 600;
	line-height: 1.24;
	color: #fff;
	z-index: 10;
	margin: 0;
`;

const SmallText = styled.h5`
	color: #fff;
	font-weight: 500;
	font-size: 11px;
	z-index: 10;
	margin: 0;
	margin-top: 7px;
`;

const InnerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 1.8em;
`;

export default function AccountBox(props) {
	return (
		<BoxContainer>
			<TopContainer>
				<BackDrop />
				<HeaderContainer>
					<HeaderText>Create</HeaderText>
					<HeaderText>Account</HeaderText>
					<SmallText>Please sign-up to continue!</SmallText>
				</HeaderContainer>
			</TopContainer>
			<InnerContainer>
				<SignupForm />
			</InnerContainer>
		</BoxContainer>
	);
}
