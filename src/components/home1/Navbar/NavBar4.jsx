import React from 'react'
import { useState } from "react";
import "./NavBar.css"
import { Link as NavLink } from "react-router-dom";

function NavBar4(props) {

    let { name6,name7,name8 } = props;
    let [mostraryOcultar, setMostraryOcultar] = useState(false);

    let hidee = () =>{
        setMostraryOcultar(!mostraryOcultar)
    }
return(
    <div>
        {mostraryOcultar ? (
            <>
                <img className="img" onClick={hidee} src="https://e7.pngegg.com/pngimages/363/898/png-clipart-equals-sign-computer-icons-equality-symbol-symbol-miscellaneous-rectangle.png"  width="40" height="30"alt="-" />
                <ul className="ul">
                <NavLink to="/NewCity">
                    <li className="d">
                        <a className="ancorLink"  href="-">{name6}</a>
                    </li>
                </NavLink>
                <NavLink to="/NewHotel">
                    <li className="f">
                        <a className="ancorLink"  href="-">{name7}</a>
                    </li>
                </NavLink>
                <NavLink to="/NewReaction">
                    <li className="f">
                        <a className="ancorLink"  href="-">{name8}</a>
                    </li>
                </NavLink>
                </ul>
            </>
        ) : (
            <img className="img" onClick={hidee} src="https://e7.pngegg.com/pngimages/363/898/png-clipart-equals-sign-computer-icons-equality-symbol-symbol-miscellaneous-rectangle.png"  width="40" height="30" alt="-" />
        )}
    </div>
);
}

export {NavBar4}
