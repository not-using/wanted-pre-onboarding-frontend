import { usePutTodosId } from "api/usePutTodosId";
import { useDeleteTodosId } from "api/useDeleteTodosId";
import { Todo } from "types/Todo";
import { styled } from "styled-components";
import CheckBox from "components/CheckBox";
import EditableTodo from "components/todo/EditableTodo";

interface IProps {
	todo: Todo;
	removeTodo: (id: number) => void;
}
const TodoItem = ({ todo, removeTodo }: IProps) => {
	const { changeTodo } = usePutTodosId();
	const { deleteTodo } = useDeleteTodosId();

	const changeChecked = (checked: boolean) => {
		changeTodo({ ...todo, isCompleted: checked });
	};

	const changeText = (text: string) => {
		changeTodo({ ...todo, todo: text });
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
					deleteTodo={() => deleteTodo(todo.id, removeTodo)}
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
`