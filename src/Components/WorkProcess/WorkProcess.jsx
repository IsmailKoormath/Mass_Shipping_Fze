import React from 'react'
import classes from "./WorkProcess.module.css"

export const WorkProcess = ({step,icon,title,para}) => {
  return (
    <div className={classes.workProcess}>
        <span className={classes.steps}>Step {step}</span>
        <div className={classes.icon_container}>
            <img src={icon} alt={icon} />
        </div>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.para}>{para}</p>
    </div>
  )
}
