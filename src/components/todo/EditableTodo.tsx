import { useState } from "react";
import { styled } from "styled-components";
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
				<StyledSpan>{value}</StyledSpan>
				<StyledButton
					data-testid="modify-button"
					onClick={() => setIsEditMode(true)}
					color="secondary"
				>
					수정
				</StyledButton>
				<StyledButton
					data-testid="delete-button"
					onClick={deleteTodo}
					color="secondary"
				>
					삭제
				</StyledButton>
			</>
		);

	return (
		<>
			<StyledInput
				type="text"
				value={value}
				data-testid="modify-input"
				onChange={(e) => setValue(e.currentTarget.value)}
			/>
			<StyledButton data-testid="submit-button" onClick={submitChanged}>
				제출
			</StyledButton>
			<StyledButton
				data-testid="cancel-button"
				onClick={resetChanged}
				color="secondary"
			>
				취소
			</StyledButton>
		</>
	);
};

export default EditableTodo;

const StyledInput = styled.input`
	min-width: 10rem;
	`;
	
	const StyledSpan = styled.span`
	display: inline-block;
	min-width: 10.5rem;
`;

const StyledButton = styled(Button)`
	margin-left: 0.4rem;
	padding: 0.2rem 0.4rem;
`;
