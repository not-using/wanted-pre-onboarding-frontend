import { useApi } from "hooks/useApi";

export const useDeleteTodosId = () => {
	const { request } = useApi();
  
	const deleteTodo = (id: number, removeTodo: (id: number) => void) =>
		request("delete", `/todos/${id}`, { onSuccess: () => removeTodo(id) });

	return { deleteTodo };
};
