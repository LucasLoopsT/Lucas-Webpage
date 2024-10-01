import styled from "styled-components"

export const Container = styled.div`
    .Section{
        max-width: 1300px;
        margin: 10vh auto;
        padding: 30px 0
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

export const Form = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    min-width: 300px;
    width: 90%;
    min-height: 600px;
    max-height: 700px;
    background-color: ${({ theme }) => theme.COLORS.bg_light};
    border-radius: 30px;

    #formulario{
        display:flex;
        flex-direction:column;
        align-items: center;
        gap: 30px;
        min-width: 50%;
        max-width: 85%;
    }
`