import React, { useState, useEffect } from 'react';
import { Thumbnail } from "./Thumbnail";
import './Carrousel.css';
import '../../../App.css'
export const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0)
  
    useEffect(() => {
     let IdInterval= setInterval(() => {
          next() 
        }, 3000);
         return () => clearInterval(IdInterval);
      }, [index])
  
  
    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
      
    }
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1)
      } else {
        setIndex(index - 1)
      }
    }
  
  
    return (
      <div className="slideshow">
        <img className="mainImg" src={imgs[index]} />
        <div className="actions">
          <button onClick={prev}>👈</button>
          <button onClick={next}>👉</button>
        </div>
        <Thumbnail arr={imgs} image={setIndex} index={index} />
      </div>
    )
  }
  // Slider automatico / manual