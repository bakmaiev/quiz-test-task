import styled from "styled-components";

export const ProgressBarContainer = styled.header`
  margin-bottom: 45px;
`;

export const ProgressLine = styled.div`
  width: 100%;
  border-radius: 100px;
  background: #e8eaf2;
`;
export const ProgressFill = styled.div`
  width: ${(props) => (props.id / 6) * 100}%;
  height: 4px;
  border-radius: 100px;
  background-color: var(--third-color);
`;

export const QuizNavigation = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
`;

export const ProgressCounter = styled.p`
  font-weight: 800;
  font-size: 18px;
  text-align: center;

  span {
    color: #e4229c;
  }
`;

export const BackBtnWrapper = styled.div`
  left: 0;
  position: absolute;
`;
