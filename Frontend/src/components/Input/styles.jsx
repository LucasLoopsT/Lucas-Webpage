import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;

  label {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LABEL};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  input {
    width: 100%;
    height: 40px;
    padding: 10px;
    padding-left: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.bg}!important;
    color: ${({ theme }) => theme.COLORS.INPUT_TEXT};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.COLORS.INPUT_AUTOFILL_BG} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.COLORS.INPUT_TEXT} !important;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.COLORS.INPUT_AUTOFILL_BG} inset !important;
    font-family: "Montserrat", sans-serif;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.color_2};
  }
`;
