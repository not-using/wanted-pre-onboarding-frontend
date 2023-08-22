import { useLocation } from "react-router-dom";
import { usePostAuthSignup } from "api/usePostAuthSignup";
import { usePostAuthSignin } from "api/usePostAuthSignin";
import AuthForm from "components/auth/AuthForm";
import { styled } from "styled-components";

const AuthPage = () => {
  const isSignup = useLocation().pathname === "/signup";

  const { signup, message: signupError } = usePostAuthSignup();
  const { signin, message: signInError } = usePostAuthSignin();

  const stage = isSignup ? "회원가입" : "로그인";

  return (
    <>
      <StyledHeading>{stage}</StyledHeading>
      <AuthForm
        stage={stage}
        request={isSignup ? signup : signin}
        message={isSignup ? signupError : signInError}
      />
    </>
  );
};

export default AuthPage;

const StyledHeading = styled.h2`
  text-align: center;
`;
