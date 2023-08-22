import { useContext } from "react";
import { TodosContext } from "contexts/todos";
import { Todo } from "types/Todo";

export const useTodos = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodos = (todos: Todo[]) => {
    setTodos(todos);
  };

  return { todos, addTodo, removeTodo, updateTodos };
};
