import { useApi } from "hooks/useApi";
import { Todo } from "types/Todo";

interface IParams {
	addTodo: (todo: Todo) => void;
}
export const usePostTodos = ({ addTodo }: IParams) => {
	const { request } = useApi();

	const createTodo = (todo: string) =>
		request("post", "/todos", {
			data: { todo },
			onSuccess: (response: any) => addTodo(response.data),
		});

	return { createTodo };
};
