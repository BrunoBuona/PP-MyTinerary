import React from 'react'
import { useState } from "react";
import "./NavBar.css"
import { Link as NavLink } from "react-router-dom";

function NavBar3(props) {

    let { name1,name2,name3,name4} = props;
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
                <NavLink to="/myhotels">
                    <li className="d">
                        <a className="ancorLink"  href="-">{name1}</a>
                    </li>
                </NavLink>
                <NavLink to="/myCities">
                    <li className="c">
                        <a className="ancorLink"  href="-">{name2}</a>
                    </li>
                </NavLink>
                <NavLink to="/myshows">
                    <li className="g">
                        <a className="ancorLink"  href="-">{name3}</a>
                    </li>
                </NavLink>
                <NavLink to="/myitineraries">
                    <li className="h">
                        <a className="ancorLink"  href="-">{name4}</a>
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

export {NavBar3}
