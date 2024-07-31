import styled from 'styled-components';
import bg_header from '../../assets/bg_header.png'

export const Container = styled.div`
 > header{
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

    > header nav{
        display: flex;
        align-items: center;
        justify-content: end;

        min-width: 390px;
        width: 90%;
        max-width: 1300px;
        height: 75px;
        position: relative;
        padding-right: 5%;
        background-color: ${({theme}) => theme.COLORS.bg_dark_70};
        border-radius: 100px;
    }

    > header nav img{
        width: 200px;
        position: absolute;
        left: 5%;
        top: -20%;
        transition: all 0.2s ease;
    }

    > header nav img:hover{
        width: 210px;
        cursor: pointer;
    }

    > header nav ul{
        width: 300px;
        display: flex;
        justify-content: space-between;
    }

    > header nav ul li{
        font-family: "Montserrat", sans - serif;
        font-optical-sizing: auto;
        font-weight: 900;
        list-style: none;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    > header nav ul li:hover{
        color: ${({theme}) => theme.COLORS.color_2};
        border-bottom: 2px solid ${({theme}) => theme.COLORS.color_2};
    }
`