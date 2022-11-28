import React from "react";
import { BASE_URL } from "../../api/url";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

import "./EditShowCard.css";

export function EditCard({ id }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  let submit = (e) => {
    e.preventDefault();
    let editShow = {
      name: name,
      description: description,
      photo: photo,
    };

    axios.patch(`${BASE_URL}/api/shows/${id}`, editShow, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      if (res.data.success) {
        Swal.fire({
          title: "Success",
          text: "The Show was updated succesfully",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="">
      <form className="formMyHotel" onSubmit={submit}>
        <label className="">
          <p>Show Name</p>
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
          <p>Show Description</p>
          <input
            className=""
            type="text"
            name="description"
            onChange={(e) => (setDescription(e.target.value))}
            min="3"
            placeholder="New Description"
          />
        </label>
        <label className="">
          <p>Urls Photos</p>
          <input className="" onChange={e=> setPhoto(e.target.value)} type="url" name="photo" placeholder="New Image" />
        </label>
        <div className="">
          <input className="btn-update" type="submit" value="Update Show" />
        </div>
      </form>
    </div>
  );
}
