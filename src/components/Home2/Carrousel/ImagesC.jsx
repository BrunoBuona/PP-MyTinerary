import React from 'react'
import './Carrousel.css'

export default function ImagesC(props) {
    let {image,name} = props
    return (
    <img src={image} alt={name} className='imgsCarousel'/>
  )
}