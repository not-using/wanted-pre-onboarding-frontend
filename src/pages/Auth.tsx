import Button from "components/Button";
import Input from "components/Input";
import { useLocation } from "react-router-dom";

const Auth = () => {
	const isSignup = useLocation().pathname === "/signup";
	const stage = isSignup ? "회원가입" : "로그인";

	return (
		<main>
			<h1>{stage}</h1>
			<form>
				<Input
					id="email"
					labelText="이메일"
					type="email"
					data-testid="email-input"
				/>
				<Input
					id="password"
					labelText="비밀번호"
					type="password"
					data-testid="password-input"
				/>
				<Button
					type="submit"
					data-testid={`sign${isSignup ? "up" : "in"}-button`}
				>
					{stage}
				</Button>
			</form>
		</main>
	);
};

export default Auth;
