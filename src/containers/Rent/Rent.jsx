import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../User/userSlice";
import { Button } from "react-bootstrap";
import RentCard from "../../components/RentCard/RentCard";
import axios from "axios";

import "./Rent.scss"

const Rent = props => {

  const [rent, setRent] = useState({
    rentList: []
  })

  const identification = useSelector(userData)

  const showRents = async () => {
    try {
      const requirements = {
        headers: {
          "Authorization": `Bearer ${identification.token}`
        }
      }
      await axios.get("https://heroku-sqlurl.herokuapp.com/rent/rent", requirements)
        .then(resp => {
          setRent({
            rentList: resp.data
          })
        })

    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div>

      <div className="Rent">
        <Button className="rentButton" onClick={() => showRents()}>Rents</Button>
      </div>
      <div className="RentInfo">{rent.rentList.map((rent, index) => (<RentCard key={index} data={rent} />))}</div>

    </div>
  )
}


export default Rent