import { useEffect, useState } from "react";
import { useApi } from "hooks/useApi";
import { Todo } from "types/Todo";

export const useGetTodos = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const { request } = useApi();

	useEffect(() => {
		request("get", "/todos", {
			onSuccess: (response: any) => setTodos(response.data),
		});
	}, []);

	const addTodo = (todo: Todo) => {
		setTodos([...todos, todo]);
	};

	const removeTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const updateTodo = (todo: Todo) => {
		setTodos(todos.map((item) => (item.id === todo.id ? todo : item)));
	};

	return { todos, addTodo, removeTodo, updateTodo };
};
