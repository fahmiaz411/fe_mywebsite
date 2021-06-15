import { Navbar, Container, Nav, Button} from 'react-bootstrap'
import ModalLogin from './Modal/ModalLogin'
import { useState, useContext } from 'react'
import { NavLink } from "react-router-dom";
import { UserContext } from '../context/userContext';

function Navigasibar() {
    const [show, setShow] = useState(false);
    const [state, dispatch] = useContext(UserContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT'            
        })
    }

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container className="mb-3"> 
                    <Nav className="me-auto">
                        <NavLink to="/" className="btn btn-light">Home</NavLink>
                        <NavLink to="/about" className="btn btn-light ms-1">About</NavLink>
                        <NavLink to="/product" className="btn btn-light ms-1">Product</NavLink>
                        <NavLink to="/profile" className="btn btn-light ms-1">Profile</NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                        {state.isLogin === false ? <Button onClick={handleShow} className="btn-sm py-0 bg-secondary border-0">Login</Button> :
                        <Button onClick={handleLogout} className="btn-sm py-0 bg-danger border-0">Logout</Button> }
                    </Nav>
                </Container>
            </Navbar>
            <ModalLogin show={show} setShow={setShow} handleClose={handleClose}/>
        </div>
    )
}

export default Navigasibar;
