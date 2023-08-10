import { useState } from "react";
import { usePutTodosId } from "api/usePutTodosId";
import { useDeleteTodosId } from "api/useDeleteTodosId";
import { Todo } from "types/Todo";
import Button from "components/Button";

interface IProps {
	todo: Todo;
	removeTodo: (id: number) => void;
}
const TodoItem = ({ todo, removeTodo }: IProps) => {
	const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
	const { changeTodo } = usePutTodosId();
	const { deleteTodo } = useDeleteTodosId();

	const changeIsCompleted = () => {
		setIsCompleted(!isCompleted);
		changeTodo({ ...todo, isCompleted: !isCompleted });
	};

	return (
		<li>
			<label>
				<input
					type="checkbox"
					checked={isCompleted}
					onChange={changeIsCompleted}
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
