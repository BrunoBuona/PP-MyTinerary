import React from "react"
import './Header.css'
import {NavBar} from '../../components/home1/Navbar/NavBar'
import {NavBar2} from '../../components/home1/Navbar/NavBar2'
import {NavBar3} from '../home1/Navbar/NavBar3'
import {NavBar4} from '../home1/Navbar/NavBar4'
import {NavBar5} from '../home1/Navbar/NavBar5'
import Profile from "../ProfileIcon/Profile"
import { useDispatch, useSelector } from "react-redux"
import loginAction from "../../redux/actions/loginForm"
import Swal from "sweetalert2"

function Header() {
    const dispatch = useDispatch();
    let userData = useSelector((state) => state.loginReducer);
    let { logged, photo, name } = userData?.token;
    console.log(logged, photo, name);

    let adminData = useSelector((state) => state.loginReducer);
    let { role } = adminData?.token;

    const SingOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
        })
            .then((result) => {
                if (result.isConfirmed) {
        const tokenStorage = localStorage.getItem("token");
        dispatch(loginAction.logOut(tokenStorage));
                    Swal.fire(
                        'Logged out!',
                        'You have been logged out',
                        'success'
                    )
                }
            })
    }

        return(
        <>
        <header className="header">
            <div className="ancors">
            
            {logged ? null : (
                <>
                    <div className="bottonHome">
                        <p className="parraf">Pages</p>
                        <NavBar2  name3="Hotels" name4="Home" name5="Cities" />
                    </div>
                    <div className="bottonHome">
                        <p className="parraf">Account</p>
                        <NavBar name1="Sign In" name2="Sign Up"/>
                    </div>
                    </>
                        )}

            {logged && role === "user" ? (
                    <>
                    <div className="bottonHome">
                        <p className="parraf">Pages</p>
                        <NavBar2  name3="Hotels" name4="Home" name5="Cities" />
                    </div>
                    <div className="bottonHome">
                        <p className="parraf">My</p>
                        <NavBar3 name2="My cities" name1="My hotels" name3="My shows" name4="My itineraries" />
                    </div>
                    <div className="bottonHome">
                        <p className="parraf">Account</p>
                        <NavBar5 onClick={SingOut} name7="Profile"  />
                    </div>
                    <div className="perfile">
                        <Profile />
                    </div>
                    </>
            ) : null}

            {logged && role === "admin" ? (
                    <>
                    <div className="bottonHome">
                        <p className="parraf">Pages</p>
                        <NavBar2  name3="Hotels" name4="Home" name5="Cities" />
                    </div>
                    <div className="bottonHome">
                        <p className="parraf">My</p>
                        <NavBar3 name2="My cities" name1="My hotels" name3="My shows" name4="My itineraries" />
                    </div>
                    <div className="bottonHome">
                        <p className="parraf">New C y H</p>
                        <NavBar4 name7="New Hotel" name6="New City" />
                    </div>
                    <div className="bottonHome">
                        <p className="parraf">Account</p>
                        <NavBar5 onClick={SingOut} name7="Profile"  />
                    </div>
                    <div className="perfile">
                        <Profile />
                    </div>
                    </>
            ) : null}
            </div>
        </header>
        </>
        )
}
export { Header }