import React, { useState } from "react";
import { EditCardItinerary } from "./EditItineraryCard"; 
import "../MyShows/Shows.css";
import { useDispatch } from "react-redux";
import myItineraryAction from "../../redux/actions/myItineraryAction"
import Swal from "sweetalert2";

export default function CardsItinerary({ name, photo, description, id }) {
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
        confirmButtonText: 'Yes, delete it.'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
              'Deleted!',
              dispatch(myItineraryAction.deleteItinerary(e)),
            'Your file has been deleted.',
          )
        }
      })
}
  return (
    <div>
      <div className="card">
        <img className="card-image" src={photo[0]} alt={name} height="250" />
        <img className="card-image" src={photo[1]} alt={name} height="250" />
        <img className="card-image" src={photo[2]} alt={name} height="250" />
        <article>
          <h4>{name}</h4>
          <p>Description: {description}</p>
          <div className="card-btns">
            <button className="btn" value={id} onClick={() => setPush(!push)}>
              Edit
            </button>
            <button className="btn" value={id} onClick={e=> deleteIt(id)}>Delete</button>
          </div>
        </article>
      </div>
      {push ? <EditCardItinerary id={id} /> : undefined }
    </div>
  );
}
