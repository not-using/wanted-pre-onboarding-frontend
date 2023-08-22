import { ComponentProps } from "react";
import { styled } from "styled-components";

interface IProps extends ComponentProps<"button"> {
  color?: "primary" | "secondary";
}

const Button = ({ color = "primary", ...rest }: IProps) => {
  return <CustomButton color={color} {...rest} />;
};

export default Button;

const CustomButton = styled.button<IProps>`
  cursor: pointer;
  padding: 0.25rem 1rem;
  background-color: ${props =>
    props.color === "primary" ? "black" : "darkgrey"};
  color: white;
  border-radius: 0.25rem;
  border: none;
`;
