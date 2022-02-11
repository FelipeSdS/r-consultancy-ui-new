import styled from 'styled-components';

export const HeaderButton = styled.header`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button{
        width: 14rem;
        padding: 1rem;
        font-weight: bolder;
        font-family: "Julius Sans One",sans-serif;
        color: #FFF;

        transition: 0.8s;

        border: none;
        border-radius: 0%.15rem;
        box-shadow: 0 1px 3px black;
        background: rgb(8, 122, 122);

        :hover{
            background: rgba(8, 122, 122, 0.8);
        }
    }
`