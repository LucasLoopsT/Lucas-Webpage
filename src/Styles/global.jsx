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

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
        text-decoration: none;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }
`;