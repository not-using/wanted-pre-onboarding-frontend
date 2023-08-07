import { useState } from "react";
import { useLocation } from "react-router-dom";
import { authPolicy } from "constants/authPolicy";
import Button from "components/Button";
import Input from "components/Input";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isSignup = useLocation().pathname === "/signup";
	const stage = isSignup ? "회원가입" : "로그인";
	const isEmailValid = authPolicy.email.validator(email);
	const isPasswordValid = authPolicy.password.validator(password);

	return (
		<main>
			<h1>{stage}</h1>
			<form>
				<Input
					id="email"
					labelText="이메일"
					data-testid="email-input"
					value={email}
					isValid={isEmailValid}
					invalidMessage={authPolicy.email.invalidMessage}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
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
			</form>
		</main>
	);
};

export default Auth;
