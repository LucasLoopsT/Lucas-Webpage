import styled from "styled-components";

export const Container = styled.div`
    > #Hello {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 90%;
        max-width: 1300px;
        padding: 10vh 0;
        margin: 0 auto;
    }

    > #Hello #paragraph{
        width: 70%;
    }

    > #Hello #paragraph h1 {
        font-family: "League Spartan", sans-serif;
        text-transform: uppercase;
        font-size: 85px;
        color: #fff;
    }

    > #Hello #paragraph h2, h3 {
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        font-size: 45px;
        color: ${({ theme }) => theme.COLORS.color_1};
    }

    > #Hello #paragraph h3 {
        font-size: 30px;
        color: ${({ theme }) => theme.COLORS.color_2};
        margin-bottom: 15px;
    }

    #Hello #paragraph p {
        font-family: lato, sans-serif;
        font-weight: 700;
        text-align: left;
        text-transform: uppercase;
        font-size: 25px;
        color: ${({ theme }) => theme.COLORS.color_2}; 

        margin: 30px 0 0;
    }

    #Hello #perfil{
        display: flex;
        justify-content: center;
        width: 50%;
        height: 300px;
        position: relative;
    }

    #Hello #perfil img{
        width: 325px;
        height: 325px;

        border-radius: 50px;
    }
    
    #Hello #perfil #square{
        width: 100%;
        min-width: 400px;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 3%;
    }

    #Hello #perfil #square div{
        background-color: ${({ theme }) => theme.COLORS.color_1};
        width: 225px;
        height: 225px;
        border-radius: 50px;
        position: relative;
        top: 60px;
        z-index: -1;
    }
`