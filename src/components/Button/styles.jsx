import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    
    button{
        width: 50%;
        height: 80px;
        padding: 10px;
        margin-top: 20px;
        border: 3px solid transparent;
        outline: none;
        border-radius: 10px;
        background-color: ${({theme}) => theme.COLORS.color_2};
        font-size: 25px;
        font-weight: bold;
        color: ${({theme}) => theme.COLORS.bg};

        transition: all 200ms ease;
    }

    button:hover{
        background-color: ${({theme}) => theme.COLORS.bg_light};
        color: ${({theme}) => theme.COLORS.color_3};
        border: 3px solid ${({theme}) => theme.COLORS.bg};

    }
`