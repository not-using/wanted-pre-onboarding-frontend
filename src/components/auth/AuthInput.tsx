import { ComponentProps } from "react";
import { styled } from "styled-components";

interface IProps extends ComponentProps<"input"> {
	id: string;
	labelText: string;
	isValid?: boolean;
	invalidMessage?: string;
}

const AuthInput = ({
	id,
	labelText,
	value,
	isValid = true,
	invalidMessage = "",
	...rest
}: IProps) => {
	const isEmpty = value === "" || undefined;
	return (
		<Wrapper>
			<label htmlFor={id}>{labelText}</label>
			<CustomInput id={id} {...rest} value={value} />
			<ErrorText>{isEmpty || isValid ? "" : invalidMessage}</ErrorText>
		</Wrapper>
	);
};

export default AuthInput;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const CustomInput = styled.input``;

const ErrorText = styled.span`
	color: red;
	font-size: 0.8rem;
	height: 1rem;
`;
