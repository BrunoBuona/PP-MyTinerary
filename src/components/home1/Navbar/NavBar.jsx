import React from "react";
import { useState } from "react";
import "./NavBar.css";

export default function NavBar(props) {
    let { name1, name2, Link, title } = props;
    let [mostrarOcultar, setMostrarOcultar] = useState(false);
    //funcion para mostrar el menu
    let hide = () => {
        setMostrarOcultar(!mostrarOcultar);
    };
    return (
        <div>
            {mostrarOcultar ? (
                <>
                    <p onClick={hide}>{title}</p>
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
                <p onClick={hide}>{title}</p>
            )}
        </div>
    );
}
