import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;

    label{
      width: 70%;
      color: white;
    }
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 70%;

  textarea{
    width: 100%;
    height: 100px;
    padding: 10px;
    padding-left: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.bg};
    color: white;
    resize: none;
    }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 12px;
  display: flex;
  align-items: start;
  justify-content: center;
  height: 100%;

  svg {
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.color_2};
  }
`;