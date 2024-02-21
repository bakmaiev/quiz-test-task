import { useNavigate, useParams } from "react-router-dom";
import { SelectButton, SelectWrapper } from "./LanguageSelect.styled";
import { useTranslation } from "react-i18next";
import { LOCALS } from "../../i18n/constants";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const LanguageSelect = ({ data }) => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const languageCodes = Object.values(LOCALS);
  const { options, title, type } = data;
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    if (selectedLanguage) {
      const newData = {
        order: id,
        title: title,
        type: type,
        answer: selectedLanguage,
      };
      localStorage.setItem(id, JSON.stringify(newData));
      navigate(`/quiz/${parseInt(id) + 1}`, { replace: true });
    }
  }, [selectedLanguage]);

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setSelectedLanguage(languageCode);
  };

  return (
    <SelectWrapper>
      {options.map((option, i) => (
        <SelectButton
          onClick={() => handleLanguageChange(languageCodes[i])}
          type="button"
          key={nanoid()}
        >
          <span>{option}</span>
        </SelectButton>
      ))}
    </SelectWrapper>
  );
};

export default LanguageSelect;
