import styled from "styled-components";

export const SelectWrapper = styled.div`
  max-width: 480px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
`;

export const SelectButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: max-content;
  border-radius: 16px;
  padding: 24px 16px;
  background-color: var(--accent-color);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover {
    background-color: var(--third-color);
    transform: scale(0.99);
  }
`;

export const SelectIcon = styled.span`
  font-size: 30px;
`;

export const SelectBtnTitle = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: var(--color);
`;
