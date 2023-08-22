import { useApi } from "hooks/useApi";
import { Todo } from "types/Todo";

export const usePutTodosId = () => {
  const { request } = useApi();

  const putRequest = (todo: Todo, onSuccess?: () => void) => {
    const changed = { isCompleted: todo.isCompleted, todo: todo.todo };

    request("put", `todos/${todo.id}`, {
      data: changed,
      onSuccess,
    });
  };
  return { putRequest };
};
