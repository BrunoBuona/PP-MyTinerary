import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import Cards from "../../components/MyHotels/Cards";
import './myHotel.css'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function MyHotels() {
  let [hotel, setHotel] = useState([]);
  let token = useSelector((store) => store.loginReducer.token)
  useEffect(() => {
    console.log(hotel);
    axios
      .get(`${BASE_URL}/api/myhotels?userId=${token.id}`)
      .then((res) => setHotel(res.data.response))
      .catch((err) => err.message);
  },);

  return (
    <div className="main-container">
           <div className="myshows-header">
        <div className="title-header">
        <h1 className="title">My Hotels</h1>
        </div>
        <div className="btn-createshow">
      <NavLink to={"../newhotel"}><img className="createshow-image" src="https://cdn-icons-png.flaticon.com/512/7604/7604035.png" alt="create show"/></NavLink>
      </div>
      </div>
        <div className="hotelsList">
      {hotel.length > 0 ? (
        hotel.map(iteracion => (
          <Cards
            name={iteracion.name}
            photo={iteracion.photo}
            description={iteracion.capacity}
            id={iteracion._id}
          />
        ))
      ) : (
        <h2 className="title2">Hotels not found</h2>
      )}
      </div>
    </div>
  );
}
