import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import "../MyHotels/EditCard.css";
import {BASE_URL} from "../../api/url";

export function EditCard({ id }) {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [photo, setPhoto] = useState("");
  let submit = (e) => {
    e.preventDefault();
    let editCity = {
      name: name,
      population: population,
      photo: photo,
    };

    axios.put(`${BASE_URL}/api/cities/${id}`, editCity, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      if (res.data.success) {
        Swal.fire({
          title: "Success",
          text: "The City was updated succesfully",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="">
      <form className="formMyHotel" onSubmit={submit}>
        <label className="">
          <p>City Name</p>
          <input
            className=""
            type="text"
            name="name"
            onChange={(e) => (setName(e.target.value))}
            min="3"
            placeholder="New Name"
          />
        </label>
        <label className="">
          <p>City Population</p>
          <input
            className=""
            type="number"
            name="population"
            onChange={(e) => (setPopulation(e.target.value))}
            min="1"
            placeholder="New population"
          />
        </label>
        <label className="">
          <p>Urls Photo</p>
          <input className="" onChange={e=> setPhoto(e.target.value)} type="url" name="photo" placeholder="New Image" />
        </label>
        <div className="">
          <input className="btn-update" type="submit" value="Update Hotel" />
        </div>
      </form>
    </div>
  );
}