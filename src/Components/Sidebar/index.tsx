import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { Link } from "react-router-dom";

import clinteLogoImg from '../../assets/cliente.png';
import departamentoLogoImg from '../../assets/departamentos.png';
import cargoLogoImg from '../../assets/cargos.png';

import { HeaderModal, BodyModal } from './styles';


const style = {
  width: 280,
  height: '100%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

type SideBarProps = {
  isOpen: boolean;
  onHandleClose: () => void;
}

export function SideBar( props : SideBarProps){

    return (
          <Modal
            open={props.isOpen}
            onClose={props.onHandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}  style={{ padding : '0px'}}>

                <HeaderModal>
                  <h1>Menu</h1>
                </HeaderModal>

                <BodyModal>
                  <ul>
                    <Link to="/clientes" style={{textDecoration: 'none', color: 'black'}} onClick={props.onHandleClose}>
                      <li>
                          <img src={clinteLogoImg} alt="Clientes"  />
                          Clientes
                      </li>
                    </Link>
                    <li>
                        <img src={departamentoLogoImg} alt="Departamentos"  />
                        Departamentos
                    </li>
                    <li>
                        <img src={cargoLogoImg} alt="Cargos"  />
                        Cargos
                    </li>
                  </ul>
                </BodyModal>

            </Box>
          </Modal>
    );
}