import { useTranslation } from "react-i18next";
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
  const options = data.options;
  const emoji = data.emoji;

  return (
    <SelectWrapper>
      {options.map((option, i) => (
        <SelectButton
          onClick={() =>
            navigate(`/quiz/${parseInt(id) + 1}`, { replace: true })
          }
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
