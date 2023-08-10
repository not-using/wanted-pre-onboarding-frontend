import { useState } from "react";
import { Todo } from "types/Todo";

interface IProps {
	todo: Todo;
}
const TodoItem = ({ todo }: IProps) => {
	const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

	return (
		<li>
			<label>
				<input
					type="checkbox"
					checked={isCompleted}
					onChange={() => setIsCompleted(!isCompleted)}
				/>
				<span>{todo.todo}</span>
			</label>
		</li>
	);
};

export default TodoItem;
