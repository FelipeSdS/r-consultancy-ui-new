import React, { FormEvent, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/styles';

import InputMask from 'react-input-mask';

import Cliente from '../../../models/Cliente/Cliente';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Autocomplete from '@mui/material/Autocomplete';
import Paises from '../../Columns/Pais';
import { deleteById } from '../../../services/RConsultacy';
import editClientIcon from '../../../assets/editClient.png';
import HeaderContent from '../../Layout/Content/Header';
import SimpleNotification from '../../SimpleNotification';
import { useNotification } from '../../../hook/useNotification';

import { Container } from './styles'

interface EditClienteProps{
    cliente: Cliente;
    idCliente: number;
    isOpen: boolean;
    onHandleClose: () => void;
}

const useStyles = makeStyles({
    textFiled: {
        width: '100%',
        height: '2rem',///
    },
    grid: {
        marginBottom: '3rem',
    }
})

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const initialValues = new Cliente({
    idCliente: 0,
    txRazaoSocial: '',
    txNomeFantasia: '',
    txNomeSimples: '',
    txCnpj: '',
    txCep: '',
    txUf: '',
    txLogradouro: '',
    vlNumero: 0,
    txBairro: '',
    txCidade: '',
    txPais: '',
    txComplemento: '',
    txTelefone: '',
    txCelular: '',
    txEmail: '',
    txWebSite: '',
    txAreaNegocios: '' 
});


const EditCliente = ( props : EditClienteProps ): JSX.Element =>{

    const classes = useStyles();
    const { showMessage, notification } = useNotification();
    const [ values, setValues ] = useState<Cliente>(initialValues);
    const [ loading, setLoading ] = useState(false);

    
    useEffect(()=>{
        console.log(props.cliente);
        setValues(props.cliente);
    },[props.idCliente]);

    const handleInputChange = (event: FormEvent) =>{
        event.preventDefault();
        const target = event.target as HTMLTextAreaElement;
        const { name, value } = target;
        setValues({
            ...values,
            [name] : value
        })
    }

    function handleSelectedOption (value : string | undefined){
        if(value !== undefined) 
            setValues({...values, ['txPais'] : value});
      };
    
    async function handleDelete() {
        setLoading(true);
        await deleteById(props.cliente.idCliente)
                .then(response => {
                    showMessage({ message: 'Excluido com sucesso.', type: 'success'});
                })
                .catch(error => {
                    showMessage({ message: error , type: 'error'});
                })
                setValues(initialValues);
                setLoading(false);
            
    }
    
    return (
        <div>
        <SimpleNotification  notification={notification}/>
          <Dialog
            fullScreen
            open={props.isOpen}
            onClose={props.onHandleClose}
            TransitionComponent={Transition}
            style={{padding: '1rem 1rem'}}
          >
            <AppBar sx={{ position: 'relative' }} style={{backgroundColor: 'rgb(8, 122, 122)'}}>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={props.onHandleClose}
                    aria-label="close"
                    style={{backgroundColor: 'rgb(8, 122, 122)'}}
                >
                    <CloseIcon />
                </IconButton>
                <HeaderContent logoIcon={editClientIcon} title="Cliente"/>
            </AppBar>
            <Container>
                <Paper elevation={3} style={{ height: '100%', padding: '2rem'}}>
                    <Grid container spacing={1} className={classes.grid}>
                        <Grid item xs={12}>
                            <TextField 
                                className={classes.textFiled}
                                label="Razão Social"
                                name="txRazaoSocial" 
                                value={values.txRazaoSocial}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.textFiled}
                                label="Nome Fantasia"
                                name="txNomeFantasia" 
                                value={values.txNomeFantasia} 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.textFiled} 
                                label="Nome Simples"
                                name="txNomeSimples" 
                                value={values.txNomeSimples} 
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.grid}>
                        <Grid item xs={12}>
                        <InputMask 
                                mask="99.999.999/9999-99"
                                value={values.txCnpj}
                                onChange={handleInputChange}                             
                                >
                                {() => 
                                
                                    <TextField 
                                        className={classes.textFiled}
                                        label="CNPJ"
                                        name="txCnpj" 
                                        value={values.txCnpj}
                                    />
                                }
                            </InputMask>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.textFiled}
                                label="CEP"
                                name="txCep" 
                                value={values.txCep}
                                onChange={handleInputChange} 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.textFiled} 
                                label="UF"
                                name="txUf" 
                                value={values.txUf}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.textFiled}
                                label="Logradouro"
                                name="txLogradouro" 
                                value={values.txLogradouro}
                                onChange={handleInputChange} 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                type="number"
                                className={classes.textFiled} 
                                label="Numero"
                                name="vlNumero" 
                                value={values.vlNumero}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.textFiled}
                                label="Bairro"
                                name="txBairro" 
                                value={values.txBairro}
                                onChange={handleInputChange} 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.textFiled} 
                                label="Cidade"
                                name="txCidade" 
                                value={values.txCidade}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={6}>
                        <Autocomplete
                            id="country-select-demo"
                            options={Paises}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            onChange={(event, value) => handleSelectedOption(value?.code)}    
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <img
                                    loading="lazy"
                                    width="20"
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                    alt=""
                                />
                                {option.label} ({option.code})
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    className={classes.textFiled}
                                    {...params}
                                    label="Pais"
                                    inputProps={{
                                        ...params.inputProps
                                    }}                           
                                />
                            )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.textFiled} 
                                label="Complemento"
                                name="txComplemento" 
                                value={values.txComplemento}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={6}>

                            <InputMask 
                                mask="(99)9999-9999"
                                value={values.txTelefone}
                                onChange={handleInputChange}  
                                >
                                {() => 
                                
                                    <TextField 
                                        className={classes.textFiled}
                                        label="Telefone"
                                        name="txTelefone" 
                                        value={values.txTelefone}
                                    />
                                }
                            </InputMask>
                        </Grid>
                        <Grid item xs={6}>
                            <InputMask 
                                mask="(99)99999-9999"
                                value={values.txCelular}
                                onChange={handleInputChange}  
                                >
                                {() => 
                                
                                    <TextField 
                                        className={classes.textFiled}
                                        label="Celular"
                                        name="txCelular" 
                                        value={values.txCelular}
                                    />
                                }
                            </InputMask>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.textFiled}
                                label="E-mail"
                                name="txEmail" 
                                value={values.txEmail}
                                onChange={handleInputChange} 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.textFiled} 
                                label="Website"
                                name="txWebSite" 
                                value={values.txWebSite}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.grid}>
                        <Grid item xs={12}>
                            <TextField 
                                className={classes.textFiled}
                                label="Área Negócios" 
                                name="txAreaNegocios"
                                value={values.txAreaNegocios}
                                onChange={handleInputChange} 
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button 
                                variant="contained" 
                                style={{ width: '100%', height: '3rem', background: 'red', opacity: '0.7'}}
                                type="reset"
                                disabled={loading}
                                onClick={handleDelete}
                            >
                                Excluir
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button 
                                variant="contained" 
                                style={{ width: '100%', height: '3rem'}} 
                                type="submit" 
                            >
                                { !loading && 'Confirmar'}
                                { loading && <CircularProgress />}
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>     
          </Dialog>
        </div>
      );
}

export default EditCliente;