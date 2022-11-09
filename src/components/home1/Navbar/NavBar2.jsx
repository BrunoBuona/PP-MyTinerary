import React from 'react'
import { useState } from "react";
import "./NavBar.css"
import { Link as NavLink } from "react-router-dom";

function NavBar2(props) {

    let { name3, name4,name5 } = props;
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
                <NavLink to="/hotels">
                    <li className="a">
                        <a className="ancorLink" href="-">{name3}</a>
                    </li>
                </NavLink>

                <NavLink to="/">
                    <li className="b">
                        <a className="ancorLink"  href="-">{name4}</a>
                    </li>
                </NavLink>

                <NavLink to="/cities">
                    <li className="c">
                        <a className="ancorLink"  href="-">{name5}</a>
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

export {NavBar2}
