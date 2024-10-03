import { createGlobalStyle } from "styled-components";
import { keyframes } from 'styled-components';

// Definindo a animação de fade in e fade out
const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.bg};
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antileased;
    }

    body, input, button, textarea{
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        outline: none;
    }

    h1, h2, h3 {
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        color: ${({ theme }) => theme.COLORS.color_1};
    }
    
    h2 {
        font-size: 45px;
    }

    h3 {
        font-size: 30px;
    }
    
    p, label {
        font-family: lato, sans-serif;
        text-align: left;
        font-size: 25px;
        color: ${({ theme }) => theme.COLORS.color_2}; 
    }

    label{
        color: white;
    }

    button, a{
        cursor: pointer;
        text-decoration: none;
    }

    .message,
    .error-message {
        position: fixed;
        top: 5%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        text-align: center;
        width: 45%;
        background-color: #53ff81;
        color: #0b501d;
        border-radius: 5px;
        padding: 15px 20px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
        animation: ${fadeInOut} 3s ease-in-out forwards;
    }

    .error-message {
        background-color: #ff5353;
        color: #500b0b;
    }

    @media screen and (max-width: 550px) {
        h1{
            font-size: 60px!important;   
        }

        h2 {
            font-size: 30px;
        }

        h3 {
            font-size: 20px;
        }

        p{
            font-size: 18px;
        }
    }
`;