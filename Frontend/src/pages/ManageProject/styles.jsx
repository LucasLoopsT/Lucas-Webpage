import styled from "styled-components";

export const Container = styled.div`
  .Section {
    max-width: 1300px;
    margin: 10vh auto;
    padding: 30px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 85%;
    margin: 0 auto;

    > p {
      text-align: center;
    }
  }

  #content {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.bg_light};
    border: 3px solid ${({ theme }) => theme.COLORS.bg_dark};
    border-radius: 30px;
  }

  @media screen and (max-width: 700px) {
    #content {
      flex-direction: column;
      align-items: center;
      gap: 40px;
      padding-bottom: 30px;
    }

    #formulario {
      width: 100% !important;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  /* min-width: 300px; */
  width: 90%;
  min-height: 600px;
  background-color: ${({ theme }) => theme.COLORS.bg_light};
  border-radius: 30px;
  text-align: center;

  .div_Select {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
  }

  .div_Select label,
  .div_Select select {
    width: 100%;
  }

  .lang-toggle {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .lang-toggle > span {
    width: 100%;
    font-size: 0.95rem;
  }

  .lang-toggle__buttons {
    display: flex;
    gap: 10px;
  }

  .lang-toggle__btn {
    min-width: 56px;
    padding: 8px 18px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.COLORS.bg_dark};
    background-color: ${({ theme }) => theme.COLORS.bg};
    color: ${({ theme }) => theme.COLORS.INPUT_TEXT};
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
  }

  .lang-toggle__btn.is-active {
    background-color: ${({ theme }) => theme.COLORS.color_2};
    color: ${({ theme }) => theme.COLORS.bg_dark};
  }

  .content-fields-pt,
  .content-fields-en {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
  }

  .content-fields-pt[hidden],
  .content-fields-en[hidden] {
    display: none !important;
  }

  #formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 50%;
    padding: 40px;
  }

  select {
    width: 70%;
    height: 40px;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.bg};
    color: ${({ theme }) => theme.COLORS.INPUT_TEXT};
    resize: none;
  }

  #techs_checkbox_list {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    > .tech_check {
      width: 60px;
      display: flex;
      gap: 10px;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      list-style: none;

      > div,
      input,
      label {
        width: 100px;
        font-size: 20px;
        text-align: center;
        cursor: pointer;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: default;
      }
    }
  }
`;

export const Preview = styled.div`
  background-color: ${({ theme }) => theme.COLORS.bg_dark};
  padding: 40px;
  border-radius: 30px 0 0 30px;
  width: 50%;

  #img_preview {
    width: 100%;
  }

  #img_preview img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }

  .field {
    border: 3px solid ${({ theme }) => theme.COLORS.bg};
    padding: 20px 10px;
    border-radius: 20px;
    margin: 40px 0;
    font-size: 20px;
  }

  #techs_preview {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    > li {
      cursor: default;
    }
  }

  a {
    display: block;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.color_1};
  }

  a {
    display: block;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.color_1};
    transition: all 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.COLORS.color_2};
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    border-radius: 30px 30px 0 0;
  }
`;
