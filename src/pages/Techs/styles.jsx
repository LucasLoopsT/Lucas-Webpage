import styled from "styled-components";

export const Container = styled.div`
    > #Techs {
        max-width: 1300px;
        height: auto;
        padding: 10vh 0;
        margin: 0 auto;
    }

    > #Techs #Icons{
        display: flex;
        justify-content: center;
        align-items: end;
        flex-wrap: wrap;
        width: 90%;
        min-width: 340px;
        gap: 20px;
        margin: 0 auto;
    }

    > #Techs #Icons li{
        width: 70px;
        height: 70px;
        list-style: none;
    }

    > #Techs #Icons img{
        position: relative;
        filter: grayscale(1);
        width: 60px;
        height: 60px;
        transition: all 0.2s ease;
    }

    > #Techs #Icons img:hover{
        width: 70px;
        height: 70px;
        filter: grayscale(0);
    }

`