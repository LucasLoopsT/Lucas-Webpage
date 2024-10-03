import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    width: 90%;
    min-height: 20vh;
    height: 30vh;
    max-height: 35vh;
    margin: 10vh auto 5vh;
    color:${({theme}) => theme.COLORS.color_1}!important;
    
    footer{
        min-width: 250px;
        width: 100%;
        max-width: 1300px;
        min-height: 190px;
        max-height: 245px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.COLORS.bg_dark};
        border: 2px solid ${({theme}) => theme.COLORS.bg}; 
        border-radius: 40px;
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
        text-align: center;
    }

    a{
        color:${({theme}) => theme.COLORS.color_1};
        border-bottom: 2px solid transparent;
        transition: all 0.2s ease;
    }    

    a:hover{
        color: ${({theme}) => theme.COLORS.color_2};
        border-bottom: 1px solid ${({theme}) => theme.COLORS.color_2};
    }
`