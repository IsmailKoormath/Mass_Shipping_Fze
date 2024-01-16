import React, { useState } from 'react'
import playbtn from '../../assets/play_btn.svg'
import background from '../../assets/video-img.png'
import classes from './Video.module.css'
const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const video = document.getElementById('yourVideo');


    const playVideo = () => {
            setIsPlaying(true);
            video?.play();
    };

    return (
        <div className={classes.video_section}>
            <div className={classes.video_text} style={{ display: isPlaying ? 'none' : 'block' }}>
                <h1>See it in Action</h1>
                <p>Watch Our Video to Get a Clear Understanding of How It Works</p>
                <img
                    className={classes.play_btn}
                    src={playbtn}
                    alt="play_btn"
                    style={{ cursor: 'pointer' }}
                    onClick={playVideo}
                />
            </div>
            <div className={classes.video_container}>
                {isPlaying ? (
                    <video
                        id="yourVideo"
                        width="100%"
                        height="100%"
                        controls={isPlaying ? 'controls' : ''}
                        onEnded={() => setIsPlaying(false)}
                        autoPlay
                    >
                        <source
                            src={require('../../assets/Web Development.mp4')}
                            type="video/mp4"
                        />
                    </video>
                ) : (
                    <img src={background} alt="background-img" />
                )}
            </div>
        </div>
    );
}

export default Video;