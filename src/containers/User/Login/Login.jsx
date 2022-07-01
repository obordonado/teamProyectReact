
import React, { useState, useEffect } from 'react';
import './Login.scss';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userData } from "../userSlice";

const Login = () => {


  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [msgError, setMsgError] = useState("");

  const dispatch = useDispatch();

  const credenciales = useSelector(userData);

  const updateCredentials = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }


  useEffect(() => {

    if (credenciales?.token !== '') {
      <NavLink className="navLink" to="/">Home</NavLink>;
    };
  }, []);


  const log = () => {




    if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email)) {
      setMsgError('Introduce un e-mail válido');
      return;
    }



    if (credentials.password.length > 4) {

      if (! /[\d()+-]/g.test(credentials.password)) {

        setMsgError('Introduce un password válido');
        return;
      };

    } else {
      setMsgError('El password debe de tener como mínimo 4 caracteres');
      return;
    }


    setMsgError("");


    dispatch(loginUser({
      email: credentials.email,
      password: credentials.password
    }
    ));

    setTimeout(() => {
      <NavLink className="navLink" to="/">Home</NavLink>;
    }, 1000)

  };

  return (
    <div className='loginDesign'>
      <pre>{JSON.stringify(credentials, null, 2)}</pre>
      <input type='email' name='email' title='email' onChange={updateCredentials} lenght='30' />
      <input type='password' name='password' title='password' onChange={updateCredentials} lenght='30' />
      <div className="sendButton" onClick={() => log()}>Login</div>
      <div>{msgError}</div>
    </div>
  )
}
export default Login;