import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/styles';

import HeaderContent from '../../Layout/Content/Header';
import BodyContent from '../../Layout/Content/Body';

import Cliente from '../../../models/Cliente/Cliente';
import { findAllClients } from '../../../services/RConsultacy';
import Columns from '../../Columns/Cliente';

import listClienteIcon from '../../../assets/listCliente.png';
import { HeaderButton } from './styles';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditCliente from '../EditCliente';

const columns: GridColDef[] = [
    { 
        field: 'idCliente',      
        headerName: 'Id',                   
        width: 100
    },
    { 
      field: 'txRazaoSocial',   
      headerName: 'Razão Social',                   
      width: 300 
    }
    ,
    { 
      field: 'txNomeFantasia',  
      headerName: 'Nome Fantasia',                   
      width: 300 
    }
    ,
    { 
      field: 'txCnpj',          
      headerName: 'CNPJ',                            
      width: 200
    },
    { 
        field: 'txUf',          
        headerName: 'Cidade',                            
        width: 80
      },
  ];

  const initCliente = new Cliente({
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

const ListCliente = (): JSX.Element => {
    
    const [ clientes, setClientes ] = useState<Cliente[]>([]);
    const [ loading, setLoading ] = useState(false);

    const [ idCliente, setIdCliente ] = useState(0);
    const [ cliente, setCliente ] = useState<Cliente>(initCliente);
    const [ openClienteModal, setOpenClienteModal ] = useState(false);
    const handleClose = () => setOpenClienteModal(false);

    useEffect(() =>{
        const findAll = async () =>{
           setLoading(true);
           const response =  await findAllClients();
           setClientes(response);
           setLoading(false);
        }
        findAll();
    },[]);

    function handleViewClient(paramCliente: any){
        let cliente: Cliente;
        cliente = paramCliente;
        setIdCliente(cliente.idCliente);
        setCliente(cliente);
        setOpenClienteModal(true);
    }

    return(
        <>
            <EditCliente idCliente={idCliente} cliente={cliente} isOpen={openClienteModal} onHandleClose={handleClose} />
            <HeaderContent logoIcon={listClienteIcon} title="Clientes"/>
            <BodyContent>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <HeaderButton>
                            <Link to="/cliente">
                                <button>Novo Cliente</button>
                            </Link>
                        </HeaderButton>
                    </Grid>
                </Grid>
                    <Grid container spacing={1} >
                        <Grid item xs={12}>
                            <div style={{ height: 550, width: '100%' }}>
                                <DataGrid
                                    getRowId={(cliente) => cliente.idCliente}
                                    rows={clientes}
                                    loading={clientes.length === 0}
                                    columns={columns}
                                    pageSize={10}
                                    rowsPerPageOptions={[10]}
                                    onRowClick={(cliente) => handleViewClient(cliente.row)}
                                    /*{...clientes}
                                    components={{
                                      Toolbar: GridToolbar,
                                    }}*/
                                    
                                />
                            </div>    
                        </Grid>
                    </Grid>
            </BodyContent>
        </>
    );
}

export default ListCliente;