import { useState } from "react";
import { usePutTodosId } from "api/usePutTodosId";
import { Todo } from "types/Todo";

interface IProps {
	todo: Todo;
}
const TodoItem = ({ todo }: IProps) => {
	const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
	const { changeTodo } = usePutTodosId();

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
			</label>
		</li>
	);
};

export default TodoItem;
