import React from "react"
import './Footer.css'
import {FooterToTop} from './FooterToUp/FooterToUp.jsx'
import FooterNav from './FooterNav/FooterNav.jsx'



function Footer() {
    return (
        <footer className="footer">
            <div className="secondNavigator">
            <FooterNav nombre="Home"   Link="/"/>
            <FooterNav nombre="Cities" Link="/Cities"/>
            <FooterNav nombre="Hotels" Link="/Hotels"/>
            </div>
            <FooterToTop/>
        </footer>
    )
}
export {Footer}