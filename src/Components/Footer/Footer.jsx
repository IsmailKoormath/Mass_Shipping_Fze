import React from 'react'
import { CustomButton } from '../CustomButton/CustomButton'
import logo from '../../assets/logo.svg'
import RecentProject from '../../assets/Recent-projcet.png'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.logo}><img src={logo} alt="logo" /><p>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.</p></div>
            <div className={classes.navigations}><h2 className={classes.headings}>Navigation</h2><ul><li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li></ul></div>
            <div className={classes.recent_project}><h2 className={classes.headings}>Recent Project</h2><img src={RecentProject} alt="recent-project-img" /></div>
            <div className={classes.subscribe_portion}><h2 className={classes.headings}>Subscribe Us</h2><input type="text" placeholder='Enter Your Email' /><CustomButton>Subscribe Now</CustomButton></div>
        </div>
    )
}

export default Footer