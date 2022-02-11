import styled from 'styled-components';

export const HeaderModal = styled.div`
     background: rgb(8, 122, 122);

     height: 5.75rem;

     padding: 2rem 2rem;

     font-family: "Julius Sans One",sans-serif;
     font-size: 0.75rem;
     color: #FFF;
`

export const BodyModal = styled.div`

    font-family: "Julius Sans One",sans-serif;
    font-weight: 600;

    ul{
        list-style: none;

        li{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background: #fff;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            padding: 2rem 1rem;

            transition: 0.5s;

            &:hover{
                background: rgb(8, 122, 122, 0.3);
                cursor: pointer;
            }

            img{
                margin-right: 1.5rem;
                width: 40px;
                height: 40px;
            }
        }
    }
`