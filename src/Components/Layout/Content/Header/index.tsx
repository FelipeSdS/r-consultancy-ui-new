import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';

import { Header, Content, Title } from './styles';

interface HeaderContentProps{
    logoIcon: string | undefined;
    title: string;

}

const useStyles = makeStyles({
    paper: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        borderRadius: 0,
        padding: '1rem'
    }
})

const HeaderContent = ({ logoIcon, title} : HeaderContentProps): JSX.Element =>{

    const clazz = useStyles();

    return(
        <Header>
            <Paper elevation={3} className={clazz.paper}>
                <Content >
                    <img src={logoIcon} alt={title} />
                </Content>
                <Title>{title}</Title>
            </Paper>
        </Header>     
    );
}

export default HeaderContent;