import { useTranslation } from "react-i18next";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { QuizContainer, QuizDescription, QuizTitle } from "./Quiz.styled";
import { useParams } from "react-router-dom";
import LanguageSelect from "../../components/LanguageSelect/LanguageSelect";
import GenderSelect from "../../components/GenderSelect/GenderSelect";
import AgeSelect from "../../components/AgeSelect/AgeSelect";

const Quiz = () => {
  const { id } = useParams();
  const { t } = useTranslation("translations");
  const data = t(id, { returnObjects: true });
  const isFirstPage = parseInt(id) === 1;
  const isSecondPage = parseInt(id) === 2;
  const isThirdPage = parseInt(id) === 3;

  return (
    <QuizContainer>
      <ProgressBar />
      <QuizTitle>{data.title}</QuizTitle>
      <QuizDescription>{data.description ?? null}</QuizDescription>
      {isFirstPage && <LanguageSelect options={data.options}></LanguageSelect>}
      {isSecondPage && <GenderSelect data={data}></GenderSelect>}
      {isThirdPage && <AgeSelect options={data.options}></AgeSelect>}
    </QuizContainer>
  );
};

export default Quiz;
