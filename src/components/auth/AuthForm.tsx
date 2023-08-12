import { useState } from "react";
import { authPolicy } from "constants/authPolicy";
import { styled } from "styled-components";
import Button from "components/Button";
import AuthInput from "components/auth/AuthInput";

interface IProps {
	stage: "회원가입" | "로그인";
	request: (email: string, password: string) => void;
	message: string;
}

const AuthForm = ({ stage, request, message }: IProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isEmailValid = authPolicy.email.validator(email);
	const isPasswordValid = authPolicy.password.validator(password);

	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				request(email, password);
			}}
		>
			<AuthInput
				id="email"
				labelText="이메일"
				data-testid="email-input"
				value={email}
				isValid={isEmailValid}
				invalidMessage={authPolicy.email.invalidMessage}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<AuthInput
				id="password"
				labelText="비밀번호"
				type="password"
				data-testid="password-input"
				value={password}
				isValid={isPasswordValid}
				invalidMessage={authPolicy.password.invalidMessage}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<StyledButton
				type="submit"
				data-testid={`sign${stage === "회원가입" ? "up" : "in"}-button`}
				disabled={isEmailValid && isPasswordValid ? false : true}
			>
				{stage}
			</StyledButton>
			<ErrorMessage>{message}</ErrorMessage>
		</Form>
	);
};

export default AuthForm;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ErrorMessage = styled.p`
	color: red;
	font-size: 0.8rem;
`;

const StyledButton = styled(Button)`
	padding: 0.25rem 1rem;
	background-color: black;
	color: white;
	border-radius: 0.25rem;
	&:disabled {
		background-color: gray;
		cursor: not-allowed;
	}
	margin-top: 1rem;
`;
