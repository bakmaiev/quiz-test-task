import { useNavigate, useParams } from "react-router-dom";
import { SelectButton, SelectWrapper } from "./LanguageSelect.styled";
import { useTranslation } from "react-i18next";
import { LOCALS } from "../../i18n/constants";
import { nanoid } from "nanoid";

const LanguageSelect = ({ options }) => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const languageCodes = Object.values(LOCALS);

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    navigate(`/quiz/${parseInt(id) + 1}`, { replace: true });
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
