import styled from "styled-components";

export const ButtonWrapper = styled.button`
  border-radius: 1000px;
  padding: 16px 16px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  height: 56px;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  background-color: var(--third-color);
  color: var(--color);
  font-weight: 800;
  font-size: 17px;
  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  opacity: ${({ disabled }) => (disabled ? "0.4" : "1")};
  &:hover {
    transform: ${({ disabled }) => (disabled ? "scale(1)" : "scale(0.99)")};
  }
`;
