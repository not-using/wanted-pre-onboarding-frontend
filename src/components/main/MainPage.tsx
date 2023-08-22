import { FlexColumn, StyledLink } from "components/Styles";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const MainPage = () => {
  return (
    <FlexColumn>
      <h3>Welcome!</h3>
      <p>할일 관리 Todo!와 함께 하세요</p>
      <GoTodo to="todo">Todo 시작하기</GoTodo>
    </FlexColumn>
  );
};

export default MainPage;

const GoTodo = styled(StyledLink)`
  font-size: 1.5rem;
  font-weight: bold;
  &:before {
    content: "👉 ";
  }
`;
