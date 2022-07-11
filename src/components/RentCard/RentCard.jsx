import React from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

import "./Rentcard.scss"

const RentCard = props => {

    return (
        <div className="rentCardContainer">
            
            <Card className="card" style={{ width: '18rem' }}>
                
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Id alquiler:</strong>{props.data.id}</ListGroupItem>
                    <ListGroupItem><strong>User:</strong> {props.data.userId}</ListGroupItem>
                    <ListGroupItem><strong>Film:</strong> {props.data.filmId}</ListGroupItem>
                    <ListGroupItem><strong>Price:</strong>{props.data.total_price}€</ListGroupItem>
                    <ListGroupItem><strong>Rent date:</strong> {props.data.createdAt}</ListGroupItem>
                    <ListGroupItem><strong>Return date:</strong>{props.data.return_date}</ListGroupItem>    
                </ListGroup>

            </Card>
        </div>
    )
}

export default RentCard