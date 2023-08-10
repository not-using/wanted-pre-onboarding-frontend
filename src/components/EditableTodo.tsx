import { useState } from "react";
import Button from "components/Button";

interface IProps {
	initialValue?: string;
	changeText: (text: string) => void;
	deleteTodo: () => void;
}

const EditableTodo = ({ initialValue, changeText, deleteTodo }: IProps) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const [value, setValue] = useState(initialValue);

	const submitChanged = () => {
		if (!value) return;
		changeText(value);
		setIsEditMode(false);
	};

	const resetChanged = () => {
		setValue(initialValue);
		setIsEditMode(false);
	};

	if (!isEditMode)
		return (
			<>
				<span>{value}</span>
				<Button data-testid="modify-button" onClick={() => setIsEditMode(true)}>
					수정
				</Button>
				<Button data-testid="delete-button" onClick={deleteTodo}>
					삭제
				</Button>
			</>
		);

	return (
		<>
			<input
				type="text"
				value={value}
				data-testid="modify-input"
				onChange={(e) => setValue(e.currentTarget.value)}
			/>
			<Button data-testid="submit-button" onClick={submitChanged}>
				제출
			</Button>
			<Button data-testid="cancel-button" onClick={resetChanged}>
				취소
			</Button>
		</>
	);
};

export default EditableTodo;
