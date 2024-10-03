import styled from "styled-components";

export const Container = styled.div`
    .Section{
        max-width: 1300px;
        margin: 10vh auto;
    }

    .title{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        width: 85%;
        margin: 0 auto;
        
        > p {
            text-align: center;
        }
    }
`

export const Hello = styled.section`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    
    @media screen and (max-width: 995px) {
        flex-direction: column;
        gap: 50px;
        
    }
`

export const Paragraph = styled.div`

    width: 70%;

    h1 {
        font-family: "League Spartan", sans-serif;
        font-size: 85px;
        color: #fff;
    }

    h3 {
        font-size: 30px;
        color: ${({ theme }) => theme.COLORS.color_2};
        margin-bottom: 15px;
    }

    p {
        font-weight: 700;
        text-transform: uppercase;
        margin: 30px 0 0;
    }
`

export const Perfil = styled.div`
    
    display: flex;
    justify-content: end;
    width: 50%;
    height: 300px;
    position: relative;

    img{
        width: 325px;
        height: 325px;
        margin-right: 10%;
        border-radius: 50px;
    }
    
    #square{
        width: 100%;
        max-width: 400px;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 3%;
    }

    #square div{
        background-color: ${({ theme }) => theme.COLORS.color_1};
        width: 225px;
        height: 225px;
        border-radius: 50px;
        position: relative;
        top: 60px;
        z-index: -1;
    }

    @media screen and (max-width: 995px) {
        justify-content: center;
        width: 100%;

        img{
            width: 325px;
            height: 325px;
            margin: 0;
        }
        
        #square{
            padding: 0;
        }
    }

    @media screen and (max-width: 450px) {
    
        img{
            max-width: 250px;
            max-height: 250px;
        }

        #square div{
            width: 160px;
            height: 160px;
            top: 0;
        }
    }
`

export const Tech = styled.section`

    ul{
        display: flex;
        justify-content: center;
        align-items: end;
        flex-wrap: wrap;
        max-width: 70%;
        min-width: 165px;
        gap: 20px;
        margin: 0 auto;
    }
`

export const Projects = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;

    width: 90%;
    max-width: 1300px;
    padding: 50px 15px;
    margin: 0 auto;

    border-radius: 40px;
    background-color: ${({ theme }) => theme.COLORS.bg_dark};

    hr{
        width: 80%;
        border: 3px solid ${({ theme }) => theme.COLORS.bg};
    }

    .swiper {
        min-height: 520px; 
        height: 100%;
        max-height: 550px;
        display: flex;
        align-items: center;
    }
    
    .swiper-button-next {
        right: 0;
    }

    .swiper-button-prev {
        left: 0;
    }

    .swiper-button-prev, .swiper-button-next {
        color: ${({ theme }) => theme.COLORS.color_1};
        transition: all 200ms ease;
    }

    .swiper-pagination{
        top:unset;
        bottom: 0;
    }

    .swiper-pagination-bullet {
        background: ${({ theme }) => theme.COLORS.color_1};
        transition: all 200ms ease;
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover,
    .swiper-pagination-bullet:hover {
        transform: scale(130%);
    }

    .swiper-slide{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    hr{
        width: 80%;
        border: 3px solid ${({ theme }) => theme.COLORS.bg_dark};
    }

    div{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin: 10px;
    }
    
    li img {
        z-index: 1;
    }

    .socialMidia{
        position: relative;
        display: flex;
    }

    .midiaText {
        display: flex;
        flex-direction: column;
        position: absolute;
        justify-content: center;
        top: 10px;
        right: 0px;
        bottom: 0px;
        left: 0px;
    }
    
    .midiaText p{
        font-size: 20px;
        margin-left: 65px;
        color: transparent;
    }
    
    .midiaText p:nth-child(2){
        padding-left: 30px;
        max-width: 170px;
    }

    .midiaText h3{
        position: absolute;
        bottom: 10px;
        right: 15px;
        cursor: pointer;
        font-size: 20px;
        color: transparent;
        border-bottom: 2px solid transparent;
        transition:  border-bottom 200ms 100ms ease-in; 
    }
    
    .socialMidia li{
        border-radius: 130px 30px 30px;
        transition: background-color ease 300ms;
    }

    .socialMidia li img{
        transition: all ease 500ms;
    }

    a:nth-child(1) .socialMidia:hover li {
        background-color: #461b59;
    }

    a:nth-child(2) .socialMidia:hover li{
        background-color: #162758;
    }

    a:nth-child(3) .socialMidia:hover li{
        background-color: #544200;
    }

    a:nth-child(4) .socialMidia:hover li{
        background-color: #313131;
    }

   .socialMidia:hover{

        > li img {
            width: 80px;
            height: 80px;
            border-radius: 100px;
            filter: grayscale(0);
        }

        > .midiaText h3{
            color: white;
            border-bottom: 2px solid white;
        }

        > .midiaText p{
            color: white;
        }
    }

    @media screen and (max-width: 1080px) {
        div{
        grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 700px) {

        a:nth-child(1) li{
            background-color: #461b59;
        }

        a:nth-child(2) li{
            background-color: #162758;
        }

        a:nth-child(3) li{
            background-color: #544200;
        }

        a:nth-child(4) li{
            background-color: #313131;
        }

        .socialMidia{
        
            > li img {
                width: 80px;
                height: 80px;
                border-radius: 100px;
                filter: grayscale(0);
            }

            > .midiaText h3{
                color: ${({ theme }) => theme.COLORS.color_1};
                color: white;
            }

            > .midiaText p{
                color: white;
            }
        }
    }

    @media screen and (max-width: 550px) {

        .midiaText p, .midiaText h3{
            font-size: 18px;
        }
        
        div{
        grid-template-columns: repeat(1, 1fr);
        }
    }

`;