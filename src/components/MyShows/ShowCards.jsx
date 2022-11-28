import React, { useState } from "react";
import { EditCard } from "./EditShowCard";
import "./Shows.css";
import { useDispatch, useSelector } from "react-redux";
import myShowAction from "../../redux/actions/myShowAction";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Cards({ name, photo, description, id }) {
    let [push, setPush] = useState(false);
    const dispatch = useDispatch()
    let navigate = useNavigate()
    function deleteIt(e) {
    Swal.fire({
        title: 'Are you sure?',
        text: "This action can't be undone",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ffff9',
        confirmButtonText: 'Yes, delete it.'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
              'Deleted!',
              dispatch(myShowAction.deleteShows(e)),
            'Your file has been deleted.',
            )
            navigate("/myshows")
        }
      })
}
  return (
    <div>
      <div className="card">
        <img className="card-image" src={photo} alt={name} height="250" />
        <article>
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="card-btns">
            <button className="btn" value={id} onClick={() => setPush(!push)}>
              Edit
            </button>
            <button className="btn" value={id} onClick={e=> deleteIt(id)}>Delete</button>
          </div>
        </article>
      </div>
      {push ? <EditCard id={id} /> : undefined }
    </div>
  );
}
