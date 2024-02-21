import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import {
  Checkmark,
  SelectWrapper,
  SelectLabel,
  SelectInput,
} from "./BookSelect.styled";
import Button from "../Button/Button";

const BookSelect = ({ data }) => {
  const { id } = useParams();
  const { options, button, title, type } = data;
  const navigate = useNavigate();
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
      navigate(`/quiz/${parseInt(id) + 1}`, { replace: true });
    }
  };

  return (
    <SelectWrapper>
      {options.map((option) => (
        <SelectLabel key={nanoid()}>
          <SelectInput
            type="checkbox"
            onChange={() => toggleOption(option)}
            checked={selectedOptions.includes(option)}
          />
          <span>{option}</span>
          <Checkmark selected={selectedOptions.includes(option)} />
        </SelectLabel>
      ))}
      <Button
        onClick={handleButtonClick}
        button={button}
        disabled={!isNextActive}
      />
    </SelectWrapper>
  );
};

export default BookSelect;
