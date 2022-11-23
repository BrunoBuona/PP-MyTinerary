import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import CardsItinerary from "../../components/MyItinerary/ItineraryCards"
import "../myShows/myShows.css";

export default function MyItineraries() {
    let [itinerary, setItinerary] = useState([]);
    useEffect(() => {
        axios
            .get(`${BASE_URL}/api/myitineraries?userId=636e884578fa70e8f8c471f5`)
            .then((res) => setItinerary(res.data.response))
            .catch((err) => err.message);
    }, []);

    return (
        <div className="main-container">
            <h1 className="title">My Itinerary</h1>
            <div className="hotelsList">
                {itinerary.length > 0 ? (
                    itinerary.map((iteracion) => (
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
