import React from "react";
import { Link } from "react-router-dom";




function CitiesPrinter(props) {
    let {name,img,id} = props
    return (
        <div className="cities">
            <img className="card-top-img" src={img} alt={name} />
            <h3>{name}</h3>
            <Link to={`/detailscities/${id}`}>See More</Link>
        </div>
    )
}
export { CitiesPrinter }

