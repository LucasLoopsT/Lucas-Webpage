import styled from "styled-components";

export const Container = styled.div`
    .Section{
        max-width: 1300px;
        margin: 10vh auto;
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
    
    h1, h2, h3 {
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        font-size: 45px;
        color: ${({ theme }) => theme.COLORS.color_1};
    }

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
        font-family: lato, sans-serif;
        font-weight: 700;
        text-align: left;
        text-transform: uppercase;
        font-size: 25px;
        color: ${({ theme }) => theme.COLORS.color_2}; 

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

    li{
        width: 70px;
        height: 70px;
        list-style: none;
    }

    li img{
        position: relative;
        filter: grayscale(1);
        width: 60px;
        height: 60px;
        transition: all 0.2s ease;
    }

    li img:hover{
        width: 70px;
        height: 70px;
        filter: grayscale(0);
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
    height: 600px;
    max-height: 600px;
    padding: 50px 15px;
    margin: 0 auto;

    border-radius: 40px;
    background-color: ${({theme}) => theme.COLORS.bg_dark};

    .swiper {
        height: 100%; 
    }
    
    .swiper-button-next {
        right: 0;
    }

    .swiper-button-prev {
        left: 0;
    }

    .swiper-button-prev, .swiper-button-next {
        color: ${({theme}) => theme.COLORS.color_1};
        transition: all 200ms ease;
    }

    .swiper-pagination{
        top:unset;
        bottom: 0;
    }

    .swiper-pagination-bullet {
        background: ${({theme}) => theme.COLORS.color_1};
        transition: all 200ms ease;
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover,
    .swiper-pagination-bullet:hover {
        transform: scale(130%);
    }

    .Card_flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ViewMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.primary};
  color: ${({ theme }) => theme.COLORS.text};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primaryHover};
  }
`;