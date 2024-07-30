import styled from "styled-components";

export const Container = styled.div`
    #Projects{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 25px;

        min-width: 50%;
        max-width: 90%;
        height: auto;
        padding: 50px 15px;
        margin: 0 auto;

        border-radius: 40px;
        background-color: ${({theme}) => theme.COLORS.bg_dark};
    }

    #Projects article{
        display: flex;
        flex-direction: column;
        align-items: center;

        min-width: 200px;
        max-width: 280px;
        min-height: 400px;
        max-height: 405px;
        
        background-color: ${({theme}) => theme.COLORS.bg_light};
        border: ${({theme}) => theme.COLORS.color_2} 2px solid;
        border-radius: 30px;
        transition: 0.8s ease;
    }

    #Projects article figure{
        max-width: 100%;
        min-width: 100%;
        min-height: 200px;
        max-height: 200px;

        background: url("https://i.scdn.co/image/ab67616d0000b2736740a467f53a5ed61c67c3df");
        object-fit: cover;
        background-repeat: no-repeat;
        background-size: 100%;
        
        border-radius: 30px 30px 0 0;
        
        transition: 800ms 0.1s ease;
    }

    #Projects article div{
        min-width: 100%;
        max-width: 100%;
        min-height: 200px;
        max-height: 205px;
        background-color: ${({theme}) => theme.COLORS.bg_light};
        border-radius: 0 0 30px 30px;
        padding: 30px 0;
    }

    #Projects article div h2{
        text-align: start;
        color: ${({theme}) => theme.COLORS.bg};
        padding-left: 30px;
        transition: 300ms 0.1s ease;
    }

    #Projects article div p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        line-clamp: 1;
        overflow: hidden; 
        text-overflow: ellipsis;
        text-align: start;
        color: ${({theme}) => theme.COLORS.bg_dark};
        padding: 30px;
        transition: 300ms 0.1s ease;
    }

    #Projects article:hover{
        box-shadow: 0 10px 0 5px ${({theme}) => theme.COLORS.color_1};
        border: 2px solid ${({theme}) => theme.COLORS.color_1};
        cursor: pointer;
    
        > figure{
            background-size: 105%;
        };
    
        > div h2, div p{
            color: white;
        }
    }
`