import styled from 'styled-components';

export const Container = styled.header`
    background: rgb(8, 122, 122);
`

export const Contet = styled.div`
    max-width: 1920px;
    margin: 0 auto;

    padding: 1rem 1rem 1rem ;
    display: flex;
    align-items: center;
    justify-content: space-between;


    h1{
        color: #FFF;
        font-family: "Julius Sans One",sans-serif;
        font-size: 1.2rem;   
    }

    div{
        width: 60px;
        height: 50px;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 0.35rem;

        display: flex;
        justify-content: center;
        align-items: center;
        background:RGBA( 255, 250, 240, 1 );

        transition: 0.3s;

        &:hover{
            filter: brightness(0.9);
            cursor: pointer;
        }

        img{
            width: 95%;
            height: 95%;
        }
    }
`