import { ButtonWrapper } from "./Button.styled";

const Button = ({ button, onClick, disabled, type }) => {
  return (
    <ButtonWrapper type={type} disabled={disabled} onClick={onClick}>
      {button}
    </ButtonWrapper>
  );
};

export default Button;
