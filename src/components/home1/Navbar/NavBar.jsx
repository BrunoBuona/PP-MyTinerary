import React from "react";
import { useState } from "react";
import "./NavBar.css";

export default function NavBar(props) {
    let { name1, name2, Link } = props;
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
                        <li className="a">
                            <a className="ancorLink" href={Link}>{name1}</a>
                        </li>
                        <li className="b">
                            <a className="ancorLink"  href={Link}>{name2}</a>
                        </li>
                    </ul>
                </>
            ) : (
                <img className="img" onClick={hide} src="https://e7.pngegg.com/pngimages/363/898/png-clipart-equals-sign-computer-icons-equality-symbol-symbol-miscellaneous-rectangle.png"  width="40" height="30" alt="-" />
            )}
        </div>
    );
}
