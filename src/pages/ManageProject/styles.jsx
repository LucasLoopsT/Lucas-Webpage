import styled from "styled-components";

export const Container = styled.div`
    .Section{
        max-width: 1300px;
        margin: 10vh auto;
        padding: 30px;
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

    #content{
        display: flex;
        justify-content: center;
        border: 3px solid ${({ theme }) => theme.COLORS.bg_dark};
        border-radius: 30px;
    }

    @media screen and (max-width: 600px){
        #content{
            flex-direction: column;
            align-items: center;
            gap: 40px;
            padding-bottom: 30px;

        }

        #formulario{
            min-width: 250px!important;
            width: 100%;
        }
    }
`

export const Form = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    min-width: 300px;
    width: 90%;
    min-height: 600px;
    /* max-height: 700px; */
    background-color: ${({ theme }) => theme.COLORS.bg_light};
    border-radius: 30px;
    text-align:center;

    .div_Select{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        width: 100%;
    }

    .div_Select label, .div_Select select{
        width: 70%;
    }

    #formulario{
        display:flex;
        flex-direction:column;
        align-items: center;
        gap: 30px;
        min-width: 50%;
        max-width: 85%;
        padding: 30px 0;

    }

    select{
        width: 70%;
        height: 40px;
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.bg};
        color: white;
        resize: none;
    }
`

export const Preview = styled.div`
    background-color: ${({theme}) => theme.COLORS.bg_dark};
    padding: 30px;
    border-radius: 30px 0 0 30px;

    #img_preview{
        min-width: 200px;
        min-height: 300px;
        max-width: 500px;
    }

    #img_preview img{
        width: 100%;
        height: 100%;
        border-radius: 30px;
    }

    p{
        border: 3px solid ${({theme}) => theme.COLORS.bg};
        padding: 20px 10px;
        border-radius: 20px;
        margin: 20px 0;
        font-size: 20px;
    }

    @media screen and (max-width: 600px){
        border-radius: 30px 30px 0 0;
    }
`

// @MediaQuery 780px