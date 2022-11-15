import React from "react"
import './Header.css'
import {NavBar} from '../../components/home1/Navbar/NavBar'
import {NavBar2} from '../../components/home1/Navbar/NavBar2'

function Header() {
        return(
        <>
        <header className="header">
            <div className="ancors">
                <div className="bottonHome">
                    <p className="parraf">Pages</p>
                    <NavBar2  name3="Hotels" name4="Home" name5="Cities" name6="New City" name7="New Hotel"/>
                </div>
                <div className="bottonHome">
                    <p className="parraf">Register</p>
                    <NavBar name1="Sign In" name2="Sign Up"/>
                </div>
            </div>
        </header>
        </>
        )
}
export { Header }