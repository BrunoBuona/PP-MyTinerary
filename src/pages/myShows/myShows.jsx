import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import Cards from "../../components/MyShows/ShowCards";
import './myShows.css'

export default function MyShows() {
  let [show, setShow] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/myshows?userId=636e884578fa70e8f8c471f5`)
      .then((res) => setShow(res.data.response))
      .catch((err) => err.message);
  }, []);

  return (
    <div className="main-container">
        <h1 className="title">My Shows</h1>
        <div className="hotelsList">
      {show.length > 0 ? (
        show.map(iteracion => (
          <Cards
            name={iteracion.name}
            photo={iteracion.photo}
            description={iteracion.description}
            id={iteracion._id}
          />
        ))
      ) : (
        <h2 className="title2">Shows not found</h2>
      )}
      </div>
    </div>
  );
}
