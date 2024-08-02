import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    height: 30vh;
    max-height: 35vh;
    color:${({theme}) => theme.COLORS.color_1}!important;
    
    footer{
        min-width: 250px;
        width: 80%;
        max-width: 1300px;
        min-height: 50%;
        max-height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.COLORS.bg_dark};
        border: 2px solid ${({theme}) => theme.COLORS.bg}; 
        border-radius: 15px;
    }
    
    img{
        width: 200px;
        transition: all 0.2s ease;
        filter: drop-shadow(2px 4px 6px ${({theme}) => theme.COLORS.color_1});
    }
    
    hr{
        width: 100%;
        border: 3px solid ${({theme}) => theme.COLORS.bg};
    }

    p{
        padding: 15px;
    }

    a{
        color:${({theme}) => theme.COLORS.color_1}!important;

    }    
`