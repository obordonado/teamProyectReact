import React from 'react';
import "./Header.scss";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logOut, userData } from '../../containers/User/userSlice';


const Header = () => {

    const identification = useSelector(userData)

    let navigate = useNavigate()
    const dispatch = useDispatch()

    const travel = (destiny) => {
        navigate(destiny)
    }

    if (!identification?.token) {

        return (
            <div className='Nav1'>

                <div className="nav" onClick={() => travel("/")}>Home</div>

                <div className="nav" onClick={() => travel("/films")}>Films</div>

                <div className="nav" onClick={() => travel("/users/login")}>Login</div>

                <div className="nav" onClick={() => travel("/users/adduser")}>Register</div>

            </div>
        )
    } else {
        return (
            <div className='Nav2'>
                <div className="nav" onClick={() => travel("/")}>Home</div>

                <div className="nav" onClick={() => travel("/films")}>Films</div>

                <div className="nav" to="/">{identification?.user.name}</div>

                <div className="nav" onClick={() => dispatch(logOut())} >Logout</div>

            </div>
        )
    }
}

export default Header
