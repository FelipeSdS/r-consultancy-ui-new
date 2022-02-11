import { FormEvent, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/styles';

import { createNewClient } from '../../../services/RConsultacy';
import { findByCep } from "../../../services/ViaCep";

import Paises from '../../Columns/Pais';

import HeaderContent from '../../Layout/Content/Header';
import BodyContent from '../../Layout/Content/Body';
import Cliente from '../../../models/Cliente/Cliente';
import SimpleNotification from '../../SimpleNotification';
import { useNotification } from '../../../hook/useNotification';

import newClienteIcon from '../../../assets/newCliente.png';


const useStyles = makeStyles({
    textFiled: {
        width: '100%',
    },
    grid: {
        marginBottom: '1.50rem'
    },
})

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

const CadCliente = (): JSX.Element =>{

    const classes = useStyles();
    const { showMessage, notification } = useNotification();
    const [ values, setValues ] = useState<Cliente>(initialValues);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
            const findCep = async () => {
                if(values.txCep.length === 8){
                    const response = await (findByCep(values.txCep));
                    setValues({...values, 
                                ['txLogradouro'] : response.logradouro, 
                                ['txUf']: response.uf,
                                ['txBairro']: response.bairro,
                                ['txCidade']: response.localidade,
                                ['txComplemento']: response.complemento});          
                }
            }
            findCep();
    }, [values.txCep]);

    function handleSelectedOption (value : string | undefined){
        if(value !== undefined) 
            setValues({...values, ['txPais'] : value});
      };

    const handleInputChange = (event: FormEvent) =>{
        event.preventDefault();
        const target = event.target as HTMLTextAreaElement;
        const { name, value } = target;
        setValues({
            ...values,
            [name] : value
        })
    }

    async function handleSubmit(event : FormEvent){
        event.preventDefault();
        setLoading(true);
        await createNewClient(values)
            .then(response => {
                showMessage({ message: 'Cadastrado com sucesso.', type: 'success'});
            })
            .catch(error => {
                showMessage({ message: error , type: 'error'});
            })
        setValues(initialValues);
        setLoading(false);
    }

    function handleReset(event : FormEvent){
        setValues(initialValues);
    }
    
    return(
        <>
        <SimpleNotification  notification={notification}/>
        <HeaderContent logoIcon={newClienteIcon} title="Novo Cliente"/>
        <BodyContent>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                    <Grid container spacing={1} className={classes.grid}>
                        <Grid item xs={12}>
                            <TextField 
                                className={classes.textFiled}
                                label="Razão Social"
                                name="txRazaoSocial" 
                                value={values.txRazaoSocial}
                                onChange={handleInputChange} 
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
                                onChange={handleInputChange} 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.textFiled} 
                                label="Nome Simples"
                                name="txNomeSimples" 
                                value={values.txNomeSimples}
                                onChange={handleInputChange}
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
                            >
                                Cancelar
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button 
                                variant="contained" 
                                style={{ width: '100%', height: '3rem'}} 
                                type="submit" 
                                disabled={loading}
                            >
                                { !loading && 'Confirmar'}
                                { loading && <CircularProgress />}
                            </Button>
                        </Grid>
                    </Grid>
            </form>
        </BodyContent>
        </>
    );
}

export default CadCliente;