import styled from "styled-components";

export const Wrapper = styled.div`
  .Section {
    max-width: 1300px;
    margin: 10vh auto;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 52vh;
  }

  .card {
    width: 100%;
    max-width: 720px;
    padding: 48px 32px;
    background-color: ${({ theme }) => theme.COLORS.bg_light};
    border: 3px solid ${({ theme }) => theme.COLORS.bg_dark};
    border-radius: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .code {
    font-size: clamp(3.5rem, 11vw, 6.5rem);
    font-weight: 800;
    line-height: 1;
    color: ${({ theme }) => theme.COLORS.color_1};
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.06em;
  }

  .title {
    font-size: clamp(1.35rem, 3.5vw, 1.85rem);
    color: ${({ theme }) => theme.COLORS.color_1};
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }

  .desc {
    font-size: clamp(1rem, 2.2vw, 1.15rem);
    color: ${({ theme }) => theme.COLORS.color_2};
    max-width: 36ch;
    line-height: 1.5;
    text-align: center;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    width: 100%;
    margin-top: 12px;
  }

  .actions .btn-wrap {
    flex: 1 1 200px;
    max-width: 300px;
    width: 100%;
  }
`;
