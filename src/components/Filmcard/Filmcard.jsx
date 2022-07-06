import React from "react";
import { Card, Button } from 'react-bootstrap'
import './Filmcard.scss'

const Filmcard = props => {
    const { director, title, year, url, genre, recomended_age, duration, price, trailerUrl } = props;
    return (
        <Card className="Filmcard" style={{ width: '22rem' }}>
            <Card.Img className="cardImg" variant="top" src={url} />
            <Card.Body className="card2">
                <Card.Title>
                    <h2>{title}</h2>
                </Card.Title>
                <ul className="list">
                    <li><strong></strong> {director}</li>
                    <li><strong></strong> {year}</li>
                    <li><strong></strong> {genre}</li>
                    <li><strong></strong> {recomended_age} +</li>
                    <li><strong></strong> {duration} minutos</li>
                    <li><strong></strong> {price} EUR </li>
                </ul>
                <Button variant="primary" className="cardBtn" size="lg" href={trailerUrl} target="_blank">Ver Trailer</Button>
            </Card.Body>
        </Card>
    )
}

export default Filmcard 