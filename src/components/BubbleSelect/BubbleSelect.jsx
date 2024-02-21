import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
import {
  SelectBtnTitle,
  SelectButton,
  SelectContainer,
  SelectIcon,
  SelectWrapper,
} from "./BubbleSelect.styled";
import Button from "../Button/Button";
import { useState } from "react";

const BubbleSelect = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { options, emoji, button, type, title } = data;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    const isSelected = selectedOptions.includes(option);
    let updatedOptions = [];

    if (isSelected) {
      updatedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption !== option
      );
    } else {
      updatedOptions = [...selectedOptions, option];
    }

    setSelectedOptions(updatedOptions);

    localStorage.setItem(
      id,
      JSON.stringify({
        order: id,
        title: title,
        type: type,
        answer: updatedOptions,
      })
    );
  };

  const isNextActive = selectedOptions.length > 0;

  const handleButtonClick = () => {
    if (isNextActive) {
      navigate("/loader");
    }
  };

  return (
    <SelectContainer>
      <SelectWrapper>
        {options.map((option, i) => (
          <SelectButton
            onClick={() => toggleOption(option)}
            key={nanoid()}
            type="button"
            selected={selectedOptions.includes(option)}
          >
            <SelectIcon>{emoji[i]}</SelectIcon>
            <SelectBtnTitle>{option}</SelectBtnTitle>
          </SelectButton>
        ))}
      </SelectWrapper>
      <Button
        onClick={handleButtonClick}
        button={button}
        disabled={!isNextActive}
      />
    </SelectContainer>
  );
};

export default BubbleSelect;
