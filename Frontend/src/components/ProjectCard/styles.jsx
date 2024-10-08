import styled from "styled-components";

export const Container = styled.article`

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    max-width: 480px;
    height: 100%;
    
    border: ${({ theme }) => theme.COLORS.color_2} 2px solid;
    border-radius: 30px;
    transition: 0.4s ease;

    #details{
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.COLORS.bg};
        border-radius: 0 0 30px 30px;
        padding: 30px 0;
    }

    #details h2{
        text-align: start;
        color: black;
        padding: 0 30px;
        transition: 200ms 0.1s ease;
        font-size: 25px;
    }

    #details p{
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
        box-shadow: 0 10px 0 5px ${({ theme }) => theme.COLORS.color_1};
        border: 2px solid ${({ theme }) => theme.COLORS.color_1};
        cursor: pointer;
    
        > #img{
            background-size: 110%;
        };
    
        >#details h2,#details p{
            color: white;
        }
    }

    @media screen and (max-width: 1000px) and (min-width: 780px){
        &:hover{
                #img{
                background-size: 160%;
            };
        }
    }

    @media screen and (max-width: 530px){
        &:hover{
                #img{
                background-size: 170%;
            };
        }
    }

    @media screen and (max-width: 450px) {
        #details h2,#details p{
            color: white;
        }

        &:hover{
            #details h2,#details p{
                color: ${({ theme }) => theme.COLORS.color_1};
            }
        }
    }
`

export const ImageContainer = styled.div`
    max-width: 100%;
    min-width: 100%;
    min-height: 200px;
    background: url(${props => props.imgurl});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top;
    border-radius: 30px 30px 0 0;
    transition: 400ms 0.1s ease;

    @media screen and (max-width: 1000px) and (min-width: 780px){
        background-size: 150%;
    }
    
    @media screen and (max-width: 530px){
        background-size: 160%;
    }
`