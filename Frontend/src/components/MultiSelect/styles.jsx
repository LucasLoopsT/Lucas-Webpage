import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;

  label {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LABEL};
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SelectBox = styled.div`
  width: 100%;
  min-height: 40px;
  padding: 10px;
  padding-left: ${({ hasIcon }) => (hasIcon ? "40px" : "10px")};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.bg};
  color: ${({ theme }) => theme.COLORS.INPUT_TEXT};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;

  cursor: pointer;
`;

export const Placeholder = styled.span`
  opacity: 0.5;
`;

export const Tag = styled.span`
  background: ${({ theme }) => theme.COLORS.color_2};
  color: black;
  padding: 3px 8px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 75px;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.bg};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.COLORS.bg_dark};
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
`;

export const Option = styled.label`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.INPUT_TEXT};

  &:hover {
    background: ${({ theme }) => theme.COLORS.bg_light};
  }

  input {
    margin-right: 10px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  height: 100%;

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.color_2};
  }
`;
