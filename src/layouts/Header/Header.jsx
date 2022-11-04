import React from "react"
import './Header.css'
import NavBar from '../../components/home1/Navbar/NavBar'


function Header() {
        return(
        <>
        <header className="header">
            <div className="ancors">
                <div className="bottonHome">
                    <NavBar className="ter" title="Home" Link="#" name1="Cities" name2="Hotels"/>
                </div>
                <div className="bottonHome">
                    <NavBar title="Register" Link="#" name1="Sign In" name2="Sign Up"/>
                </div>
            </div>
        </header>
        </>
        )
}
export { Header }