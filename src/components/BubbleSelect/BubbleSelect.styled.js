import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 48px;
  padding: 4px 2px;
  overflow-x: scroll;
`;

export const SelectButtonWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 48px;
  padding: 4px 2px;
  overflow-x: scroll;
`;

export const SelectButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: var(--accent-color);
  border: 2px solid
    ${({ selected }) => (selected ? "var(--third-color)" : "transparent")};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:nth-child(4n + 3) {
    margin-top: 24px;
  }
  overflow: hidden;
  &:hover {
    transform: scale(0.99);
  }
`;

export const SelectIcon = styled.span`
  font-size: 24px;
  margin-bottom: 4px;
`;

export const SelectBtnTitle = styled.span`
  font-weight: 600;
  font-size: 13px;
  color: var(--color);
  text-overflow: ellipsis;
  text-overflow: ellipsis;
`;
