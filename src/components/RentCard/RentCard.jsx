import React from "react"
import "./Rentcard.scss"

const RentCard = props => {
    return(
        <div className="rentCardContainer">
            
            <div className="rentCard">
                <strong>Id alquiler: {props.data.id}</strong>
                <br></br>
                <br></br>
                <strong>Price:</strong> {props.data.price}€
                <br></br>
                <strong>Rent date:</strong> {props.data.createdAt}<br></br> 
                <strong>Return date: {props.data.return_date}</strong><br></br> 
                <strong>User:</strong> {props.data.userId} 
                <br></br>
                <strong>Film:</strong> {props.data.filmId} 
            </div>
        
        </div>
    )
}

export default RentCard