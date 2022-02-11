import { useState } from "react";
import { Container, Contet } from "./styles";


import iconMenu from '../../assets/iconMenu.png';
import { SideBar } from "../Sidebar";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <Container>
            <Contet>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <h1>R-Consultancy</h1>
                </Link>
                <div onClick={handleOpen}>
                    <img src={iconMenu} alt=""/>
                </div>
            </Contet>
            <SideBar isOpen={open} onHandleClose={handleClose}/>
        </Container>
    )
}

export default Header;