import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { userData } from "../User/userSlice";
import axios from "axios";
import { useState } from "react";

import "./Rent.scss"

const Rent = props => {

  const token = useSelector(userData)
  const [rent, setRent] = useState({
    rent:[]
  })
  
  return (

    <div>Rents</div>

  )
}

export default Rent