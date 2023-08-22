import { useGetTodos } from "api/useGetTodos";
import { useTodos } from "hooks/useTodos";
import { styled } from "styled-components";
import TodoItem from "components/todo/TodoItem";

const TodoList = () => {
  useGetTodos();
  const { todos } = useTodos();

  return (
    <StyledUl>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </StyledUl>
  );
};

export default TodoList;

const StyledUl = styled.ul`
  padding: 0;
`;
