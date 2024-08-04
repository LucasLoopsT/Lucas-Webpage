import styled from "styled-components";

export const Container = styled.li`
    
    width: ${({ sizeicon }) => `calc(${sizeicon}px + 10px)`};
    height: ${({ sizeicon }) => `calc(${sizeicon}px + 10px)`};
    list-style: none;

    img {
    position: relative;
    filter: grayscale(1);
    width: ${props => props.sizeicon}px;
    height: ${props => props.sizeicon}px;
    transition: all 0.2s ease;
  }

  img:hover {
    width: ${({ sizeicon }) => `calc(${sizeicon}px + 10px)`};
    height: ${({ sizeicon }) => `calc(${sizeicon}px + 10px)`};
    filter: grayscale(0);
  }

`