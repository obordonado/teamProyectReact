import React from 'react';
import "./Header.css";
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"





function Header() {
    return (
        <div className='Nav'>

            <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
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
            </Nav>

        </div>
    )
}

export default Header