import * as React from 'react';
import Button from '@mui/material/Button';
import { GridColDef, GridRenderCellParams  } from '@mui/x-data-grid';

const Columns: GridColDef[] = [
    { 
      field: 'idCliente',       
      headerName: 'Identificador',                   
      width: 120 
    }
    ,
    { 
      field: 'txRazaoSocial',   
      headerName: 'Razaão Social',                   
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
      width: 200,
    },
  ];

  export default Columns;