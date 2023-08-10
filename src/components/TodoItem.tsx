import { usePutTodosId } from "api/usePutTodosId";
import { useDeleteTodosId } from "api/useDeleteTodosId";
import { Todo } from "types/Todo";
import CheckBox from "components/CheckBox";
import Button from "components/Button";

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

	return (
		<li>
			<label>
				<CheckBox
					initialChecked={todo.isCompleted}
					changeChecked={changeChecked}
				/>
				<span>{todo.todo}</span>
				<Button data-testid="modify-button" onClick={() => {}}>
					수정
				</Button>
				<Button
					data-testid="delete-button"
					onClick={() => deleteTodo(todo.id, removeTodo)}
				>
					삭제
				</Button>
			</label>
		</li>
	);
};

export default TodoItem;
