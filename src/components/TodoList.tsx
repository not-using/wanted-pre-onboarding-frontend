import { useGetTodos } from "api/useGetTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const { todos } = useGetTodos();
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};

export default TodoList;
