import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { SelectButton, SelectWrapper } from "./AgeSelect.styled";

const AgeSelect = ({ data }) => {
  const { id } = useParams();
  const { options, title, type } = data;
  const navigate = useNavigate();
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
      {options.map((option) => (
        <SelectButton
          onClick={() => handleButtonClick(option)}
          type="button"
          key={nanoid()}
        >
          <span>{option}</span>
        </SelectButton>
      ))}
    </SelectWrapper>
  );
};

export default AgeSelect;
