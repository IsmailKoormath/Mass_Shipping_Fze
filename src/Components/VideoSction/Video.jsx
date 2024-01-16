import React from 'react'
import playbtn from '../../assets/play_btn.svg'
import classes from './Video.module.css'
const Video = () => {
    return (
        <div className={classes.video_section}>
            <div className={classes.video_text}><h1>See it in Action</h1>
                <p>Watch Our Video to Get a Clear Understanding of How It Works</p>
                <img src={playbtn} alt="play_btn" /></div>

            <video style={{ width: "100%",minHeight:"32rem" }} controls src="mov_bbb.mp4" type="video/mp4"></video>
        </div>
    )
}

export default Video
