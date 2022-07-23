import React from 'react'
import { getDateTime } from '../../../utils'
import './Card.scss'
const Card = ({ name = '', description = '', dateInMillis = '' }) => {
  const { date, time } = getDateTime(dateInMillis)
  return (
    <div className="card-container">
      <div className="card-left">
        <div className="task-name">{name}</div>
        <div className="task-description">{description}</div>
      </div>
      <div className="card-right">
        <div className="date">{date}</div>
        <div className="time">{time}</div>
      </div>
    </div>
  )
}

export default Card
