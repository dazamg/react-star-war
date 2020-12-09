import React from 'react'
import { Link } from 'react-router-dom'

export const StarShip = (props) => {

    let info = props.location.state.ship
    return (
        <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <p>Name: {info.name}</p>
                    <p>Model: {info.model}</p>

                </div>
            </div>
            <Link to="/">Return to Deck</Link>
        </div>
    )
}
export default StarShip