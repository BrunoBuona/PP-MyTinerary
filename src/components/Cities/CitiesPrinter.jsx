import React from "react";
import { Link } from "react-router-dom";
import { cities } from '../../data/cities.js'



function CitiesPrinter() {

    const getHotelList = cities.map(e => e)
    return (
            getHotelList.map(e=>{
            return(  
            <div className="hotel">
                <img className="card-top-img" src={e.photo} alt="hotel" />
                <h3>{e.name}</h3>
                <Link to={`/detailscities/${e.id}`}>See More</Link>
            </div>
     )})
    )
}
export { CitiesPrinter }

