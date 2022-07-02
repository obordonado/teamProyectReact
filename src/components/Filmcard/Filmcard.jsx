import React from "react";
import './Filmcard.scss'

const Filmcard = props => { 

    return (
        <div className="Filmcard">
            <p>Titulo: {props.data.name}</p>
            <p>Sinopsis: {props.data.stateSky.description}</p>
            <p>Ranking: </p>
            {props.children}
        </div>
    )
}

export default Filmcard 