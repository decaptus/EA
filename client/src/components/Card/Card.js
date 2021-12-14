import React from 'react'
import './Card.css'

function Card({src, text}) {
    return (
        <div className="card">
            <img src={src} alt=""/>
            <div className="card__info">
                <h2>{text}</h2>
            </div>
        </div>
    )
}

export default Card
