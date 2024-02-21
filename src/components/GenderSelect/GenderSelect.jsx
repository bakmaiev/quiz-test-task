import {
  SelectBtnTitle,
  SelectButton,
  SelectIcon,
  SelectWrapper,
} from "./GenderSelect.styled";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const GenderSelect = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { options, emoji, title, type } = data;
  const handleButtonClick = (selectOption) => {
    localStorage.setItem(
      id,
      JSON.stringify({
        order: id,
        title: title,
        type: type,
        answer: selectOption,
      })
    );
    navigate(`/quiz/${parseInt(id) + 1}`, { replace: true });
  };

  return (
    <SelectWrapper>
      {options.map((option, i) => (
        <SelectButton
          onClick={() => handleButtonClick(option)}
          type="button"
          key={nanoid()}
        >
          <SelectIcon>{emoji[i]}</SelectIcon>
          <SelectBtnTitle>{option}</SelectBtnTitle>
        </SelectButton>
      ))}
    </SelectWrapper>
  );
};

export default GenderSelect;
