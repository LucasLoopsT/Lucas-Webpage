import styled from "styled-components";

export const Container = styled.article`

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    max-width: 480px;

    border: ${({theme}) => theme.COLORS.color_2} 2px solid;
    border-radius: 30px;
    transition: 0.4s ease;

    #details{
        width: 100%;
        height: 100%;
        background-color: ${({theme}) => theme.COLORS.bg};
        border-radius: 0 0 30px 30px;
        padding: 30px 0;
    }

    #details h2{
        text-align: start;
        color: black;
        padding-left: 30px;
        transition: 200ms 0.1s ease;
        font-size: 25px;
    }

    #details p{
        width: 275px;
        max-width: 275px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden; 

        font-size: 20px;
        text-align: start;
        color: black;
        padding: 30px;
        transition: 200ms 0.1s ease;
    }

    &:hover{
        transform: scale(102%);
        box-shadow: 0 10px 0 5px ${({theme}) => theme.COLORS.color_1};
        border: 2px solid ${({theme}) => theme.COLORS.color_1};
        cursor: pointer;
    
        > #img{
            background-size: 160%;
        };
    
        >#details h2,#details p{
            color: white;
        }
    }
`

export const ImageContainer = styled.div`
    max-width: 100%;
    min-width: 100%;
    min-height: 200px;
    max-height: 200px;
    background: url(${props => props.imgurl});
    background-repeat: no-repeat;
    background-size: 150%;
    background-position: center;
    border-radius: 30px 30px 0 0;
    transition: 400ms 0.1s ease;
`