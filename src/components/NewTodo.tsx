import { useState } from "react";
import { usePostTodos } from "api/usePostTodos";
import { Todo } from "types/Todo";
import Input from "components/Input";
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
			}}
		>
			<Input
				id="newTodo"
				labelText=""
				data-testid="new-todo-input"
				value={todo}
				onChange={(e) => setTodo(e.currentTarget.value)}
			/>
			<Button data-testid="new-todo-add-button">추가</Button>
		</form>
	);
};

export default NewTodo;
