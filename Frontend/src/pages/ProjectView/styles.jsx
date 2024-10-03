import styled from "styled-components";

export const Preview = styled.div`
    display: flex;
    max-width: 1300px;
    width: 90%;
    flex-direction: column;
    background-color: ${({theme}) => theme.COLORS.bg_dark};
    padding: 30px 0;
    border: 4px solid ${({theme}) => theme.COLORS.bg_dark};
    border-radius: 30px;
    margin: 10vh auto;

    h2{
        text-align: center;
        padding: 0 20px 25px;
    }

    #img_preview{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 50%;
    }
    
    #img_preview img{
        max-width: 70%;
        max-height: 30%;
        object-fit: contain;
        border-radius: 30px;
    }

    .field{
        width: 80%;
        padding: 20px 10px;
        border: 3px solid ${({theme}) => theme.COLORS.bg};
        border-radius: 20px;
        margin: 15px auto;
        font-size: 20px;
    }

    #techs_preview{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        
        > li{
            cursor: default;
        }
        img{
            filter: grayscale(0)!important;
            
        }
    }

    a{
        display: block;
        text-align: center;
        width: 40%;
        background-color: ${({ theme }) => theme.COLORS.bg};
        color: ${({ theme }) => theme.COLORS.color_1};
        text-decoration: underline transparent;
        transition: all 200ms ease;
    }

    a:hover{
        color: ${({ theme }) => theme.COLORS.color_2};
        text-decoration: underline;
    }
`