import React from "react";
import { useSelector } from "react-redux";
import "./profile.css"

export default function Profile() {
  let userProfile = useSelector((state) => state.loginReducer);

  let { photo, name } = userProfile.token;
  return (
    <div className="cont-main-profile">
      <div className="cont-title">
          <h5 className="name-profiel">{name}</h5>
          <img className="img-profiel" src={photo} alt={name} />
      </div>
    </div>
  );
}