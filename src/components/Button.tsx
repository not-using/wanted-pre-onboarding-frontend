import { ComponentProps } from "react";
import { styled } from "styled-components";

interface IProps extends ComponentProps<"button"> {}
const Button = ({ ...rest }: IProps) => {
	return <CustomButton {...rest} />;
};

export default Button;

const CustomButton = styled.button`
	cursor: pointer;
`;
