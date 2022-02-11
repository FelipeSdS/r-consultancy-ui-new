import { Component, ReactNode } from "react";
import Paper from '@mui/material/Paper';

import { Container, ContainerContent} from './styles'

class BodyContent extends Component{

    render(): ReactNode {
        return(
            <Container>
                <ContainerContent>
                    <Paper 
                        elevation={3} 
                        style={{
                            width: '100%',
                            padding: '2rem',
                        }}
                    >
                        {this.props.children}
                    </Paper>
                </ContainerContent>
            </Container>
        );
    }
}

export default BodyContent;