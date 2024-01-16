import React, { useState } from 'react'
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu.svg"
import cross from "../../assets/cross.png"
import classes from './Header.module.css'
import { CustomButton } from '../CustomButton/CustomButton'
const Header = () => {
    const [menuItems, setMenuItems] = useState(false)
    return (
        <div className={classes.header}>
            <div className={classes.header_top}>
                <div className={classes.header_contact}><p>massshipping@mail.com</p> <span>+1 (333) 000-0000</span></div>
                <CustomButton className={classes.quote_btn} fontSize="1.125rem">Get Quote</CustomButton>  
            </div>
            <div className={classes.header_bottom}>
                <img className={classes.logo} src={logo} alt="logo" />
                <div className={menuItems ? `${classes.active_menus}` : `${classes.menus}`}>
                    <ul>
                        <li style={{ color: '#1195D6' }}>HOME</li>
                        <li>ABOUT US</li>
                        <li>SERVIDES</li>
                        <li>GALLERY</li>
                        <li>CONTACT US</li>
                    </ul>

                    <img onClick={() => setMenuItems(false)} className={classes.cross_icon} src={cross} alt='cross' />
                </div>
                <img onClick={() => setMenuItems(true)} className={classes.menu_icon} src={menu} alt='menu' />
            </div>
        </div>
    )
}

export default Header