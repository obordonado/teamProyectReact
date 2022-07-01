import React from 'react';
import "./Header.scss";
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"





function Header() {
    return (
        <div className='Nav'>
                <Nav.Item>
                    <NavLink className="navLink" to="/">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="navLink" to="/users/login">Login</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="navLink" to="/users/adduser">Register</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="navLink" to="/films">Films</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>

        </div>
    )
}

export default Header