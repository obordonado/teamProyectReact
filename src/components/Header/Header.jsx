import React from 'react';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logOut, userData } from '../../containers/User/userSlice';
import { Navbar, Container, Nav } from 'react-bootstrap';

import "./Header.scss";


const Header = () => {

    let navigate = useNavigate()
    
    const identification = useSelector(userData)

    const dispatch = useDispatch()

    const travel = (destiny) => {
        navigate(destiny)
    }

    if (!identification?.token) {

        return (

            <Navbar bg="light" expand="lg" className='nav1'>

                <Container className='container'>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='scrolldown'/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link className="nav" onClick={() => travel("/")}>Home</Nav.Link>
                            <Nav.Link className="nav" onClick={() => travel("/films")}>Films</Nav.Link>
                            <Nav.Link className="nav" onClick={() => travel("/users/login")}>Login</Nav.Link>
                            <Nav.Link className="nav" onClick={() => travel("/users/adduser")}>Register</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    } else {

        return (
            
            <Navbar bg="light" expand="lg" className='nav1'>

                <Container className='container'>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='scrolldown'/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link className="nav" onClick={() => travel("/")}>Home</Nav.Link>
                            <Nav.Link className="nav" onClick={() => travel("/films")}>Films</Nav.Link>
                            <Nav.Link className="nav" onClick={() => travel("/rent/rent")}>Rent</Nav.Link>
                            <Nav.Link className="nav" to="/">{identification?.user.name}</Nav.Link>
                            <Nav.Link className="nav" onClick={() => dispatch(logOut())}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header
