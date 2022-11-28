import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import Cards from "../../components/MyShows/ShowCards";
import './myShows.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MyShows() {
  let [show, setShow] = useState([]);
  let token = useSelector((store) => store.loginReducer.token)
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/myshows?userId=${token.id}`)
      .then((res) => setShow(res.data.response))
      .catch((err) => err.message);
  }, []);

  return (
    <div className="main-container">
      <div className="myshows-header">
        <div className="title-header">
        <h1 className="title">My Shows</h1>
        </div>
        <div className="btn-createshow">
      <NavLink to={"./newshow"}><img className="createshow-image" src="https://cdn-icons-png.flaticon.com/512/7604/7604035.png" alt="create show"/></NavLink>
      </div>
      </div>
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
