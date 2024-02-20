import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { SelectButton, SelectWrapper } from "./AgeSelect.styled";

const AgeSelect = ({ options }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <SelectWrapper>
      {options.map((option) => (
        <SelectButton
          onClick={() =>
            navigate(`/quiz/${parseInt(id) + 1}`, { replace: true })
          }
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
