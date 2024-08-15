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
        min-width: 400px;
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
`

export const Tech = styled.section`

    ul{
        display: flex;
        justify-content: center;
        align-items: end;
        flex-wrap: wrap;
        max-width: 70%;
        min-width: 340px;
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

    min-width: 340px;
    width: 90%;
    max-width: 1300px;
    min-height: auto;
    min-height: 800px;
    height: auto;
    max-height: 900px;
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

    ul{
       display: flex; 
       justify-content: center;
       flex-wrap: wrap;
       gap: 25px;
       max-width: 100%;
       margin-top: 25px;
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
        width: 100%;
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
    }
    
    .socialMidia li{
        border-radius: 130px 30px 30px;
        transition: background-color ease 300ms;
    }

    .socialMidia li img{
        transition: all ease 500ms;
    }

   .socialMidia:hover{

    > li{
        background-color: ${({ theme }) => theme.COLORS.bg_light};
    }

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
        color: ${({ theme }) => theme.COLORS.color_2};
    }
    
}

`;