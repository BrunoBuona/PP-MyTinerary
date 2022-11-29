import React from "react";
import { useState } from "react";
import "./NavBar.css";
import { Link as NavLink } from "react-router-dom";

function NavBar(props) {
    let { name1, name2, name3, name4, name5} = props;
    let [mostrarOcultar, setMostrarOcultar] = useState(false);

    //funcion para mostrar el menu
    let hide = () => {
        setMostrarOcultar(!mostrarOcultar);
    };

    
    return (
        <div>
            {mostrarOcultar ? (
                <>
                    <img className="img" onClick={hide} src="https://e7.pngegg.com/pngimages/363/898/png-clipart-equals-sign-computer-icons-equality-symbol-symbol-miscellaneous-rectangle.png"  width="40" height="30"alt="-" />
                    <ul className="ul">
                    <NavLink to="/SignIn">
                        <li className="a">
                            <a className="ancorLink" href="-">{name1}</a>
                        </li>
                    </NavLink>
                    <NavLink to="/SignUp">
                        <li className="b">
                            <a className="ancorLink"  href="-">{name2}</a>
                        </li>
                    </NavLink>
{/*                     <NavLink to="/myCities">
                        <li className="c">
                            <a className="ancorLink"  href="-">{name3}</a>
                        </li>
                    </NavLink>
                    <NavLink to="/myhotels">
                        <li className="d">
                            <a className="ancorLink"  href="-">{name4}</a>
                        </li>
                    </NavLink>
                    <NavLink to="/profile">
                        <li className="e">
                            <a className="ancorLink"  href="-">{name5}</a>
                        </li>
                    </NavLink> */}
                        
                    </ul>
                </>
            ) : (
                <img className="img" onClick={hide} src="https://e7.pngegg.com/pngimages/363/898/png-clipart-equals-sign-computer-icons-equality-symbol-symbol-miscellaneous-rectangle.png"  width="40" height="30" alt="-" />
                )}
        </div>
    );
}
export{NavBar}

