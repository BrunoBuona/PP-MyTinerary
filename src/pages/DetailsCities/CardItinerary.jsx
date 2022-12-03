import React from "react";
import Reaction from "../../components/reaction/Reaction";
/* import Reaction from "../components/Reaction"; */


export default function CardItinerary(props) {
  let { name, price, description, photo, duration, id} = props;

console.log(id);
let idItinerary = props.id
  return (
    <div className="main-details-City">
      <div className="left-mh">
        <img className="img-mh3" src={photo[1]} alt={name}/>
        <img className="img-mh3" src={photo[2]} alt={name}/>
        <img className="img-mh3" src={photo[0]} alt={name}/>
      </div>
      <div className="right-mh-2">
        <h3>{name}</h3>
        <h5>{description}</h5>
        <h5>USD ${price}</h5>
        <h5>Duration: {duration} hour
        </h5>
      </div>
      <div className="flex justify-end w-100 g-25 p-0-5">
     
       <Reaction idTinerary={idItinerary} name={name}/>
      </div>
    </div>
  );
}