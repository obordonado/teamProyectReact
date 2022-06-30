import { useState } from 'react'
import './App.css'
import  { BrowserRouter, Routes, Route} from 'react-router-dom';
import  Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Login from "./containers/User/Login/Login";
import Register from "./containers/User/Register/Register";
import Profile from "./containers/User/Profile/Profile";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Login />} />
          <Route path="/users/login" element={<Register />} />
          <Route path="/users/adduser" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
