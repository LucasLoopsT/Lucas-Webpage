import styled from 'styled-components';
import bg_header from '../../assets/bg_header.png'

export const Container = styled.div`
    header{
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

    nav{
        display: flex;
        align-items: center;
        justify-content: end;

        width: 90%;
        max-width: 1300px;
        height: 75px;
        position: relative;
        padding-right: 5%;
        background-color: ${({theme}) => theme.COLORS.bg_dark_70};
        border-radius: 100px;
    }

    img{
        width: 200px;
        position: absolute;
        left: 5%;
        top: -20%;
        transition: all 0.2s ease;
        filter: drop-shadow(2px 4px 6px ${({theme}) => theme.COLORS.color_1});
    }

    img:hover{
        width: 210px;
        cursor: pointer;
        filter: drop-shadow(2px 4px 20px ${({theme}) => theme.COLORS.color_1});
    }
    
    #menu{
        display: none;
        position: absolute;
        width: 35px;
        height: 35px;
        z-index: 10;
    }
    
    #menu-faketrigger{
        display: none;
        position: absolute;
        width: 35px;
        height: 35px;
        cursor: pointer;
        opacity: 0;
        z-index: 11;
    }

    #menu span{
        display: block;
        width: 35px;
        height: 5px;
        margin-bottom: 10px;
        background-color: white;
        border-radius: 3px;
        transition: all 200ms ease;
    }

    #menu-faketrigger:hover ~ #menu span{
        background-color: ${({theme}) => theme.COLORS.color_2}
    }

    #menu-faketrigger:checked ~ #menu span:nth-child(1){
        transform-origin: 0% 0%;
        transform: rotate(45deg) scaleX(1.25);
    }

    #menu-faketrigger:checked ~ #menu span:nth-child(2){
        opacity: 0;
    }

    #menu-faketrigger:checked ~ #menu span:nth-child(3){
        transform-origin: 0% 100%;
        transform: rotate(-45deg) scaleX(1.25);
    }

    ul{
        width: 300px;
        display: flex;
        justify-content: space-between;
    }

    ul li{
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

    ul li:hover{
        color: ${({theme}) => theme.COLORS.color_2};
        border-bottom: 2px solid ${({theme}) => theme.COLORS.color_2};
    }
    
    @media screen and (max-width: 620px){
        #menu, #menu-faketrigger{
            display: block
        }

        ul{
            display: none;
        }
        
        #menu-faketrigger:checked ~ ul {
                display: flex;
                position: absolute;
                flex-direction: column;
                justify-content: start;
                gap: 20px;
                top: 0;
                right: 0;
                width: 200px;
                height: 300%;
                padding: 20px;
                background-color: ${({theme}) => theme.COLORS.bg_dark_70};
                border: 2px solid ${({theme}) => theme.COLORS.color_2};
                border-radius: 25px;
            

            li{
                width: 80%;
            }

            li:first-child{
                margin-top: 30%;
            }
        }
    }
`