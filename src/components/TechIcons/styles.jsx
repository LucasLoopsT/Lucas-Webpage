import styled from "styled-components";

export const Container = styled.li`
    
    width: 70px;
    height: 70px;
    list-style: none;

    img{
        position: relative;
        filter: grayscale(1);
        width: 60px;
        height: 60px;
        transition: all 0.2s ease;
    }

    img:hover{
        width: 70px;
        height: 70px;
        filter: grayscale(0);
    }

`