import { styled } from "styled-components";
import { StyledLink } from "components/Styles";
import SignButton from "components/SignButton";

const Header = () => {
  return (
    <StyledHeader>
      <Logo to="/">Todo!</Logo>
      <SignButton />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  max-width: 1200px;
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
`;

const Logo = styled(StyledLink)`
  font-size: 2rem;
  font-weight: bold;
`;
