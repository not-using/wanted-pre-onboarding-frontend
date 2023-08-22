import { FlexColumn, FlexRow } from "components/Styles";
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
    <FlexRow>
      <StyledLabel htmlFor={id}>{labelText}</StyledLabel>
      <FlexColumn>
        <CustomInput id={id} {...rest} value={value} />
        <ErrorText>{isEmpty || isValid ? "" : invalidMessage}</ErrorText>
      </FlexColumn>
    </FlexRow>
  );
};

export default AuthInput;

const StyledLabel = styled.label`
  width: 4rem;
  text-align: center;
`;

const CustomInput = styled.input`
  margin: 0.8rem 4rem 0 1rem;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 0.8rem;
  height: 1rem;
  margin: 0 4rem 0 1rem;
`;
