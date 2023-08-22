import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { StyledLink } from "components/Styles";
import Button from "components/Button";

const SignButton = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsSignedIn(!!localStorage.getItem("token"));
  }, [location]);

  const singout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return isSignedIn ? (
    <SignOutButton onClick={singout}>로그아웃</SignOutButton>
  ) : (
    <span>
      <SignUpLink to="/signup">
        <Week>회원이 아니신가요? </Week>
        <Bold>회원가입</Bold>
      </SignUpLink>
      <SignInLink to="/signin">로그인</SignInLink>
    </span>
  );
};

export default SignButton;

const SignUpLink = styled(StyledLink)``;

const Week = styled.span`
  color: grey;
  @media screen and (max-width: 420px) {
    display: none;
  }
`;

const Bold = styled.b`
  text-decoration: underline;
  color: black;
`;

const SignInLink = styled(StyledLink)`
  margin-left: 1rem;
  padding: 0.25rem 1rem;
  background-color: black;
  color: white;
  border-radius: 0.25rem;
`;

const SignOutButton = styled(Button)`
  padding: 0.5rem 1rem;
`;
