import React from "react";
import { Link } from "react-router-dom";
import { hotels } from "../../data/hotels.js";


function getRandomImage(arr) {
    const length = arr.length;
    const randomIndex = Math.floor(length * Math.random())
    return arr[randomIndex]
  }

function HotelPrinter() {
    const getHotelList = hotels.map(e => e) 
    return (
            getHotelList.map((e)=>{
            return(  
            <div key={e.id+1} className="hotel">
                <img className="card-top-img" src={getRandomImage(e.photo)} alt="hotel" />
                <h3>{e.name}</h3>
                <Link key={e.id} to={`/detailshotels/${e.id}`}>See More</Link>
            </div>
     )})
    )
}
export { HotelPrinter }


// FINISHED
