import React, { useState } from "react";
import { EditCard } from "./EditCard";
import "../MyHotels/Cards.css"
import { useDispatch } from "react-redux";
import myCityAction from "../../redux/actions/myCityAction"
import Swal from "sweetalert2";

export default function Cards({ name, photo, description, id }) {
    let [push, setPush] = useState(false);
    
    const dispatch = useDispatch()
    function deleteIt(e) {
    Swal.fire({
        title: 'Are you sure?',
        text: "This action can't be undone",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ffff9',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
              'Deleted!',
              dispatch(myCityAction.deleteCities(e)),
            'Your file has been deleted.',
          )
        }
      })
}
  return (
    <div>
      <div className="card">
        <img className="card-image" src={photo} alt={name} height="250" />
        <article>
          <h4>{name}</h4>
          <p>population: {description}</p>
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
