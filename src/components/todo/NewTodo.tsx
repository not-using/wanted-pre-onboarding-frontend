import { useState } from "react";
import { usePostTodos } from "api/usePostTodos";
import { Todo } from "types/Todo";
import { styled } from "styled-components";
import Button from "components/Button";

interface IProps {
	addTodo: (todo: Todo) => void;
}

const NewTodo = ({ addTodo }: IProps) => {
	const [todo, setTodo] = useState("");
	const { createTodo } = usePostTodos({ addTodo });

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				createTodo(todo);
				setTodo("");
			}}
		>
			<input
				id="newTodo"
				data-testid="new-todo-input"
				value={todo}
				onChange={(e) => setTodo(e.currentTarget.value)}
			/>
			<StyledButton data-testid="new-todo-add-button">추가</StyledButton>
		</form>
	);
};

export default NewTodo;

const StyledButton = styled(Button)`
	margin-left: 1rem;
`;