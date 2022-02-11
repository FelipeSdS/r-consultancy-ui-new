import { Container } from './styles';

import mainImg from '../../assets/main.png';

const Main = (): JSX.Element =>{
    return(
        <>         
            <Container>
                <div>
                    <img src={mainImg} alt="Main"/>
                </div>
            </Container>
        </>
    )
}

export default Main;