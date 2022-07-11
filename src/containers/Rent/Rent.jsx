import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../User/userSlice";
import { Container, Row, Col } from "react-bootstrap";
import RentCard from "../../components/RentCard/RentCard";
import axios from "axios";
import { useEffect } from "react";

import "./Rent.scss"

const Rent = props => {

  const [rent, setRent] = useState({
    rentList: []
  })

  const identification = useSelector(userData)

  const requirements = {
    headers: {
      "Authorization": `Bearer ${identification.token}`
    }
  }

  useEffect(() => {
    axios.get("https://heroku-sqlurl.herokuapp.com/rent/rent", requirements)
      .then(resp => {
        setRent({
          rentList: resp.data
        })
      })
  }, [])

  return (
    <Container className="RentInfo">
      <Row>
        {
          rent.rentList.map((rent, index) => (
            <Col key={index} xs={6} sm={4} md={3} xl={3}>
              <RentCard key={index} data={rent} />
            </Col>
          ))
        }


      </Row>
    </Container>

  )
}


export default Rent