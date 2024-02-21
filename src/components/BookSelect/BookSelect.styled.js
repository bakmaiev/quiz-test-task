import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const SelectLabel = styled.label`
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 12px 20px;
  background-color: ${({ selected }) =>
    selected ? "rgba(228, 34, 155, 0.2)" : "var(--accent-color)"};
  cursor: pointer;
  border: ${({ selected }) => (selected ? "2px solid #e4229b" : "")};
  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  span {
    font-weight: 600;
    font-size: 17px;
    color: var(--color);
  }
  &:hover {
    background-color: var(--third-color);
    transform: scale(0.99);
  }
`;

export const SelectInput = styled.input`
  display: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--third-color);
  border-radius: 4px;
  margin: 0;
  cursor: pointer;
  &:checked {
    background-color: var(--third-color);
  }
`;

export const Checkmark = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ selected }) =>
    selected ? "var(--third-color)" : "#6d4376"};
  border: 1px solid var(--third-color);
  border-radius: 8px;
  margin-left: auto;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    display: ${({ selected }) => (selected ? "block" : "none")};
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
