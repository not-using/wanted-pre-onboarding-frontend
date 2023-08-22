import { useTodos } from "hooks/useTodos";
import { usePutTodosId } from "api/usePutTodosId";
import { useDeleteTodosId } from "api/useDeleteTodosId";
import { Todo } from "types/Todo";
import { styled } from "styled-components";
import CheckBox from "components/CheckBox";
import EditableTodo from "components/todo/EditableTodo";

interface IProps {
  todo: Todo;
}

const TodoItem = ({ todo }: IProps) => {
  const { putRequest } = usePutTodosId();
  const { deleteRequest } = useDeleteTodosId();
  const { removeTodo } = useTodos();

  const changeChecked = (checked: boolean) => {
    putRequest({ ...todo, isCompleted: checked });
  };

  const changeText = (text: string) => {
    putRequest({ ...todo, todo: text });
  };

  const deleteTodo = () => {
    deleteRequest(todo.id, removeTodo);
  };

  return (
    <StyledList>
      <label>
        <CheckBox
          initialChecked={todo.isCompleted}
          changeChecked={changeChecked}
        />
        <EditableTodo
          initialValue={todo.todo}
          deleteTodo={deleteTodo}
          changeText={changeText}
        />
      </label>
    </StyledList>
  );
};

export default TodoItem;

const StyledList = styled.li`
  list-style: none;
  margin: 0.2rem 0;
`;
