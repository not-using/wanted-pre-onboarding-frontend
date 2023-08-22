import { useApi } from "hooks/useApi";
import { useTodos } from "hooks/useTodos";

export const usePostTodos = () => {
  const { request } = useApi();
  const { addTodo } = useTodos();

  const createTodo = (todo: string) =>
    request("post", "/todos", {
      data: { todo },
      onSuccess: (response: any) => addTodo(response.data),
    });

  return { createTodo };
};
