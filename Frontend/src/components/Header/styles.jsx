import styled from "styled-components";
import bg_header from "../../assets/bg_header.png";

export const Container = styled.div`
  header {
    display: flex;
    justify-content: center;

    width: 100%;
    height: auto;
    padding: 5vh 0 12vh;

    background: url(${bg_header});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: end;

    width: 90%;
    height: 75px;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.bg_dark_70};
    border-radius: 100px;
  }

  img {
    width: 200px;
    position: absolute;
    left: 5%;
    top: -20%;
    transition: all 0.2s ease;
    filter: drop-shadow(2px 4px 6px ${({ theme }) => theme.COLORS.color_1});
  }

  img:hover {
    width: 210px;
    cursor: pointer;
    filter: drop-shadow(2px 4px 20px ${({ theme }) => theme.COLORS.color_1});
  }

  #menu {
    display: none;
    position: absolute;
    width: 35px;
    height: 35px;
    z-index: 10;
  }

  #menu-faketrigger {
    display: none;
    position: absolute;
    width: 35px;
    height: 35px;
    margin-right: 30px;
    cursor: pointer;
    opacity: 0;
    z-index: 11;
  }

  .header-tools {
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 12;
  }

  .tool-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    padding: 0 10px;
    border-radius: 999px;
    border: 2px solid ${({ theme }) => theme.COLORS.color_2};
    background: transparent;
    color: ${({ theme }) => theme.COLORS.color_2};
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 0.02em;
    transition: all 0.2s ease;
  }

  .tool-btn:hover {
    color: ${({ theme }) => theme.COLORS.color_1};
    border-color: ${({ theme }) => theme.COLORS.color_1};
  }

  .tool-btn.lang-btn.active {
    background-color: ${({ theme }) => theme.COLORS.color_1};
    border-color: ${({ theme }) => theme.COLORS.color_1};
    color: ${({ theme }) => (theme.mode === "light" ? "#fff" : "#101010")};
  }

  #menu span {
    display: block;
    width: 35px;
    height: 5px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.COLORS.MENU_LINES};
    border-radius: 3px;
    transition: all 200ms ease;
  }

  #menu-faketrigger:hover ~ #menu span {
    background-color: ${({ theme }) => theme.COLORS.color_2};
  }

  #menu-faketrigger:checked ~ #menu span:nth-child(1) {
    transform-origin: 0% 0%;
    transform: rotate(45deg) scaleX(1.25);
  }

  #menu-faketrigger:checked ~ #menu span:nth-child(2) {
    opacity: 0;
  }

  #menu-faketrigger:checked ~ #menu span:nth-child(3) {
    transform-origin: 0% 100%;
    transform: rotate(-45deg) scaleX(1.25);
  }

  ul {
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-right: 30px;
  }

  ul li {
    font-family:
      "Montserrat",
      sans - serif;
    font-optical-sizing: auto;
    font-weight: 900;
    list-style: none;
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.color_3};
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  ul li:hover {
    color: ${({ theme }) => theme.COLORS.color_2};
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.color_2};
  }

  #signOut {
    color: ${({ theme }) => theme.COLORS.color_2};
    font-size: 30px;
    transition: all 0.2s ease;
  }

  #signOut:hover {
    color: ${({ theme }) => theme.COLORS.color_1};
    cursor: pointer;
  }

  @media screen and (max-width: 780px) {
    #menu,
    #menu-faketrigger {
      margin-right: 30px;
      display: block;
    }

    ul {
      margin-right: 0px;
      display: none;
    }

    #menu-faketrigger:checked ~ ul {
      display: flex;
      position: absolute;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      top: 145%;
      right: 0;
      width: 100%;
      height: max-content;
      padding: 20px;
      background-color: ${({ theme }) => theme.COLORS.bg_dark_70};
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px); /* Safari */
      border: 2px solid ${({ theme }) => theme.COLORS.color_2};
      border-radius: 25px;
      animation: openUl 0.5s forwards;

      li {
        width: auto;
        z-index: 100;
      }
    }
  }

  @keyframes openUl {
    0% {
      opacity: 0;
      transform: translateY(-145%);
    }
    100% {
    }
  }
`;
