import React from "react";
import { Card, Button } from 'react-bootstrap'
import './Filmcard.scss'

const Filmcard = props => { 
    const { director, title, year, image, genre, recomended_age, duration, price } = props;
    return (
        <Card>
            <Card.Img variant="top" src={image || "https://static.vecteezy.com/system/resources/previews/000/665/794/large_2x/vector-cinema-elements.jpg"} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <h4>Información</h4>
                        <ul>
                        <li>Director: {director}</li>
                        <li>Año de estreno: {year}</li>
                        <li>Genero: {genre}</li>
                        <li>Edad recomendada: {recomended_age}</li>
                        <li>Duración: {duration} minutos</li>
                        <li>Precio: {price} EUR </li>
                        </ul>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Filmcard 