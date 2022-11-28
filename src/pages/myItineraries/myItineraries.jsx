import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import CardsItinerary from "../../components/MyItinerary/ItineraryCards"
import "../myShows/myShows.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


export default function MyItineraries() {
    let [itinerary, setItinerary] = useState([]);
    let token = useSelector((store) => store.loginReducer.token)
    useEffect(() => {
        axios
            .get(`${BASE_URL}/api/myitineraries?userId=${token.id}`)
            .then((res) => setItinerary(res.data.response))
            .catch((err) => err.message);
    }, []);

    return (
        <div className="main-container">
        <div className="myshows-header">
          <div className="title-header">
          <h1 className="title">My Itinerary</h1>
          </div>
          <div className="btn-createshow">
        <NavLink to={"./newitineraries"}><img className="createshow-image" src="https://cdn-icons-png.flaticon.com/512/7604/7604035.png" alt="create itineraries"/></NavLink>
        </div>
        </div>
          <div className="hotelsList">
        {itinerary.length > 0 ? (
          itinerary.map(iteracion => (
            <CardsItinerary
            name={iteracion.name}
            photo={iteracion.photo}
            description={iteracion.description}
            id={iteracion._id}
        />
          ))
        ) : (
          <h2 className="title2">itinerary not found</h2>
        )}
        </div>
      </div>
    );
}




