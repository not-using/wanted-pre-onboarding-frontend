import { useEffect } from "react";
import { useApi } from "hooks/useApi";
import { useTodos } from "hooks/useTodos";

export const useGetTodos = () => {
	const { request } = useApi();
	const { updateTodos } = useTodos();

	useEffect(() => {
		request("get", "/todos", {
			onSuccess: (response: any) => updateTodos(response.data),
		});
	}, []);
};
