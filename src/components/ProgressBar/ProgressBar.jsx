import { useNavigate, useParams } from "react-router-dom";
import {
  BackBtnWrapper,
  ProgressBarContainer,
  ProgressCounter,
  ProgressFill,
  ProgressLine,
  QuizNavigation,
} from "./ProgressBar.styled";
import { FaChevronLeft } from "react-icons/fa";

const ProgressBar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isBackBtn = parseInt(id) < 3;

  return (
    <ProgressBarContainer>
      <QuizNavigation>
        {isBackBtn ? null : (
          <BackBtnWrapper>
            <FaChevronLeft
              onClick={() => navigate(`/quiz/${id - 1}`, { replace: true })}
            />
          </BackBtnWrapper>
        )}
        <ProgressCounter>
          <span>{id} </span>/ 5
        </ProgressCounter>
      </QuizNavigation>
      <ProgressLine>
        <ProgressFill id={id} />
      </ProgressLine>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
