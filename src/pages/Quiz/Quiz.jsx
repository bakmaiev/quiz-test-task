import { useTranslation } from "react-i18next";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { QuizDescription, QuizTitle } from "./Quiz.styled";
import { useParams } from "react-router-dom";
import LanguageSelect from "../../components/LanguageSelect/LanguageSelect";
import GenderSelect from "../../components/GenderSelect/GenderSelect";
import AgeSelect from "../../components/AgeSelect/AgeSelect";
import BookSelect from "../../components/BookSelect/BookSelect";
import BubbleSelect from "../../components/BubbleSelect/BubbleSelect";

const Quiz = () => {
  const { id } = useParams();
  const { t } = useTranslation("translations");
  const data = t(id, { returnObjects: true });
  const isFirstPage = parseInt(id) === 1;
  const isSecondPage = parseInt(id) === 2;
  const isThirdPage = parseInt(id) === 3;
  const isFourthPage = parseInt(id) === 4;
  const isFifthPage = parseInt(id) === 5;

  return (
    <section>
      <QuizTitle>{data.title}</QuizTitle>
      <QuizDescription>{data.description ?? null}</QuizDescription>
      {isFirstPage && <LanguageSelect data={data} />}
      {isSecondPage && <GenderSelect data={data} />}
      {isThirdPage && <AgeSelect data={data} />}
      {isFourthPage && <BookSelect data={data} />}
      {isFifthPage && <BubbleSelect data={data} />}
    </section>
  );
};

export default Quiz;
