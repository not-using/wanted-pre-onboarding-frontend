import { useState } from "react";
import { useLocation } from "react-router-dom";
import { usePostAuthSignup } from "api/usePostAuthSignup";
import { usePostAuthSignin } from "api/usePostAuthSignin";
import { authPolicy } from "constants/authPolicy";
import { styled } from "styled-components";
import Button from "components/Button";
import AuthInput from "components/auth/AuthInput";

const AuthPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isSignup = useLocation().pathname === "/signup";
	const stage = isSignup ? "회원가입" : "로그인";
	const isEmailValid = authPolicy.email.validator(email);
	const isPasswordValid = authPolicy.password.validator(password);

	const { signup, message: signupError } = usePostAuthSignup();
	const { signin, message: signInError } = usePostAuthSignin();

	const request = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const request = isSignup ? signup : signin;
		request(email, password);
	};

	return (
		<>
			<h1>{stage}</h1>
			<form onSubmit={request}>
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
				<Button
					type="submit"
					data-testid={`sign${isSignup ? "up" : "in"}-button`}
					disabled={isEmailValid && isPasswordValid ? false : true}
				>
					{stage}
				</Button>
				<ErrorMessage>{signupError || signInError}</ErrorMessage>
			</form>
		</>
	);
};

export default AuthPage;

const ErrorMessage = styled.p`
	color: red;
	font-size: 0.8rem;
`;
