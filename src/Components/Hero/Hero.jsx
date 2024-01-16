import React from 'react'
import client from '../../assets/client.png'
import classes from './Hero.module.css'
import { CustomButton } from '../CustomButton/CustomButton'
const Hero = () => {
    return (
        <div className={classes.hero_section}>
            <h6 className={classes.subHeading}>we are best logistic company</h6>
            <h1 className={classes.heading}>Streamline Your Shipping with<br /> Our Cargo Services</h1>
            <p className={classes.para}>Simplify your shipping process and make it more efficient with our<br /> cargo services. From start to finish, we'll handle everything to ensure<br /> your cargo arrives safely.</p>
            <div className={classes.clients_exp}>
                <div className={classes.clients}>
                    <img src={client} alt="client" />
                    <div><h2>26 K</h2><span>Satisfied Clients</span></div>
                    <div><h2>12 +</h2><span>Years of Experience</span></div>
                </div>
                <div className={classes.tracking_section}> 
                    <div className={classes.tracking_rate_btns}><button className={classes.tracking_btn}>Tracking</button><button className={classes.rate_btn}>Rate & Ship</button></div>

                    <div className={classes.track}>
                        <div className={classes.traking_id}><input className={classes.traingInput} type="text" placeholder='tracking id' /><CustomButton fontSize=" 0.875rem">track</CustomButton></div>
                        <p>See the tracking id on shipping document. <span style={{ color:"#1195d6"}}>Help</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero