import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.bg};
        color: ${({theme}) => theme.COLORS.WHITE};
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

    button, a{
        cursor: pointer;
        text-decoration: none;
    }
`;