import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 0.75rem;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.3);

        img{
        width: 1.75rem;
        height: 1.75rem; 
    }
`

export const Title = styled.h1`
    font-size: 1.25rem;
    font-family: "Julius Sans One",sans-serif;
`