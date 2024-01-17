import React from 'react'
import classes from './ReviewCard.module.css'
import star from '../../assets/Star.svg'
const ReviewCard = ({ background, para, name, color }) => {
  return (
      <div style={{background: background, color:color}} className={classes.reviewCard}>
          <img src={star} alt="rating" />
          <p>{para}</p>
          <h5>{name}</h5>
    </div>
  )
}

export default ReviewCard