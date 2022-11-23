import React, { useState, useEffect } from "react";
import axios from "axios";
import Carduser from "../../components/MyCities/CardUser";


export default function MyHotels() {
    let [city, setCity] = useState([]);
    useEffect(() => {
        console.log(city);
        axios
            .get(`http://localhost:8000/api/mycities?userId=636e884578fa70e8f8c471f7`)
            .then((res) => setCity(res.data.response))
            .catch((err) => err.message);
    }, []);

    return (
        <div className="main-container">
            <h1 className="title">My City</h1>
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
            <h2 className="title2">city not found</h2>
          )}
          </div>
        </div>
      );
}