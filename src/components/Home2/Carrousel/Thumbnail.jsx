import React from "react";
import './Carrousel.css';
import '../../../App.css'

export const Thumbnail = ({ arr, image, index }) => {
    return (<div className="tumbnail">
      {
        arr.map((imgsrc, i) => (
          <img
            key={i}
            height="50"
            src={imgsrc}
            onClick={() => image(i)}
            className={ index === i ? 'active' : ''}
          />
        ))
      }
    </div>)
  }
  

  // Componente de miniatura carrusel