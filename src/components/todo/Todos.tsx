import { useState } from "react";
import { TodosProvider } from "contexts/todos";
import { Todo } from "types/Todo";
import NewTodo from "components/todo/NewTodo";
import TodoList from "./TodoList";

const Todos = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	return (
		<TodosProvider value={{ todos, setTodos }}>
			<NewTodo />
			<TodoList />
		</TodosProvider>
	);
};

export default Todos;
