import { ComponentProps } from "react";
import { styled } from "styled-components";

interface IProps extends ComponentProps<"input"> {
	id: string;
	labelText: string;
}

const Input = ({ id, labelText, ...rest }: IProps) => {
	return (
		<Wrapper>
			<label htmlFor={id}>{labelText}</label>
			<CustomInput id={id} {...rest} />
		</Wrapper>
	);
};

export default Input;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const CustomInput = styled.input`
`;
