import React, { useState } from "react";
import { Card, Button, Modal } from 'react-bootstrap'
import './Filmcard.scss'

const Filmcard = props => { 
    const {
      director,
      title,
      year,
      url,
      genre,
      recomended_age,
      duration,
      price,
      trailerUrl
    } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Card className = "FilmCard">
            <Card.Img
              className="filmCardImg"
              variant="top"
              src={url}
              onClick={handleShow}
            />
            <Card.Body>
                <Card.Title>
                    <h2>{title}</h2>
                </Card.Title>
            </Card.Body>
        </Card>
  
        <Modal className="modalPrincipalBody" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modalHeader">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <img className="cardImgClick" src={url}/>
            <ul>
                <li><strong>Director:</strong> {director}</li>
                <li><strong>Release date:</strong> {year}</li>
                <li><strong>Genre:</strong> {genre}</li>
                <li><strong>Recommended age:</strong> {recomended_age}</li>
                <li><strong>Duration:</strong> {duration} minutes</li>
                <li><strong>Price:</strong> {price} EUR </li>
            </ul>
            <Button variant="primary" className ="cardBtn" size="lg" href={trailerUrl} target="_blank">Watch Trailer</Button>
          </Modal.Body>
        </Modal>
      </>
    )
}

export default Filmcard 