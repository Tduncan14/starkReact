"use client"

import React from 'react'
import './Card.css'

const Card = ({ image, text, title }) => {
    return (
        <div className="cardDesign">


            <h3>{title}</h3>


            <p>{text}</p>


        </div>
    )
}

export default Card
