import { Navbar, Container, Nav, Button} from 'react-bootstrap'
import Modal from './Modals'
import { useState } from 'react'
import { NavLink } from "react-router-dom";

function Navigasibar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <Button onClick={handleShow} className="btn-sm py-0 bg-secondary border-0">Login</Button>
                    </Nav>
                </Container>
            </Navbar>
            <Modal show={show} handleClose={handleClose}/>
        </div>
    )
}

export default Navigasibar;
