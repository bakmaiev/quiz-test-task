import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const SelectButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 16px;
  padding: 12px 20px;
  background-color: var(--accent-color);
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  span {
    font-weight: 600;
    font-size: 17px;
    color: var(--color);
  }
  &:hover {
    background-color: var(--third-color);
  }
`;
