import { Dispatch, SetStateAction, createContext } from "react";
import { Todo } from "types/Todo";

interface ITodosContext {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  setTodos: () => {},
});

export const TodosProvider = TodosContext.Provider;
