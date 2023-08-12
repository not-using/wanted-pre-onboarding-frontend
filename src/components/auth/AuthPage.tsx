import { useLocation } from "react-router-dom";
import { usePostAuthSignup } from "api/usePostAuthSignup";
import { usePostAuthSignin } from "api/usePostAuthSignin";
import AuthForm from "components/auth/AuthForm";

const AuthPage = () => {
	const isSignup = useLocation().pathname === "/signup";
	
	const { signup, message: signupError } = usePostAuthSignup();
	const { signin, message: signInError } = usePostAuthSignin();

	const stage = isSignup ? "회원가입" : "로그인";

	return (
		<>
			<h1>{stage}</h1>
			<AuthForm
				stage={stage}
				request={isSignup ? signup : signin}
				message={isSignup ? signupError : signInError}
			/>
		</>
	);
};

export default AuthPage;
