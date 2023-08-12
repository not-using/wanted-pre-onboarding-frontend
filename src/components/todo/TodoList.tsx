import { useGetTodos } from "api/useGetTodos";
import { styled } from "styled-components";
import TodoItem from "components/todo/TodoItem";
import NewTodo from "components/todo/NewTodo";

const TodoList = () => {
	const { todos, addTodo, removeTodo } = useGetTodos();

	return (
		<>
			<NewTodo addTodo={addTodo} />
			<StyledUl>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
				))}
			</StyledUl>
		</>
	);
};

export default TodoList;

const StyledUl = styled.ul`
	padding: 0;
`