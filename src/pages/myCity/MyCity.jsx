import React, { useState, useEffect } from "react";
import axios from "axios";
import Carduser from "../../components/MyCities/CardUser";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function MyHotels() {
    let [city, setCity] = useState([]);
    let token = useSelector((store) => store.loginReducer.token)
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/mycities?userId=${token.id}`)
            .then((res) => setCity(res.data.response))
            .catch((err) => err.message);
    }, );

    return (
        <div className="main-container">
           <div className="myshows-header">
          <div className="title-header">
          <h1 className="title">My City's</h1>
          </div>
          <div className="btn-createshow">
        <NavLink to={"../NewCity"}><img className="createshow-image" src="https://cdn-icons-png.flaticon.com/512/7604/7604035.png" alt="create itineraries"/></NavLink>
        </div>
        </div>
            <div className="hotelsList">
          {city.length > 0 ? (
            city.map(iteracion => (
              <Carduser
                name={iteracion.name}
                photo={iteracion.photo}
                description={iteracion.population}
                id={iteracion._id}
              />
            ))
          ) : (
            <h2 className="title2">City not found</h2>
          )}
          </div>
        </div>
      );
}