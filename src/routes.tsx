import React from 'react';

import { 
    Switch, 
    Route} 
from 'react-router-dom';

import Main from './Components/Main';

import Cliente from './pages/Cliente';
import CadCliente from './Components/Cliente/CadCliente';


const Routes = (): JSX.Element =>{

    return(
        <Switch>
            <Route exact path="/" component={Main} />

            <Route exact path="/clientes"  component={Cliente} />
            <Route exact path="/cliente"  component={CadCliente} />
            
        </Switch>
    );
}

export default Routes;
