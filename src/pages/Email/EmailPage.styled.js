import styled from "styled-components";

export const EmailContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmailWrapper = styled.div`
  width: 100%;
`;

export const EmailTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  margin-bottom: 16px;
`;

export const EmailDescription = styled.p`
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  color: #c4c8cc;
  margin-bottom: 56px;
`;

export const EmailForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmailInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 12px 20px;
  background-color: var(--accent-color);
  color: var(--color);
  cursor: pointer;
  outline: none;
  border: ${({ error }) => (error ? "2px solid red" : "none")};
  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  span {
    font-weight: 600;
    font-size: 17px;
    color: var(--color);
  }
  &:hover {
    background-color: #492752;
    transform: scale(0.99);
  }
  &:focus {
    border: ${({ error }) =>
      error ? "2px solid red" : "2px solid var(--third-color)"};
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmailPolicy = styled.p`
  margin: 0 auto;
  max-width: 280px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: #b6b8c3;
  margin-bottom: 56px;
`;

export const ErrorText = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: red;
  margin-top: 8px;
`;
