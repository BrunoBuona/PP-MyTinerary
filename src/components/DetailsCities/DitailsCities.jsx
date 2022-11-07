import React from 'react'
import "./DitailsCities.css"
import { useParams } from 'react-router-dom'
import { cities } from '../../data/cities.js'


const DitailsCities = () => {

    let { eId} = useParams()
    
    let ditaisCities = cities.find( citys => citys.id === eId)

  return (
            <div className='main-details-City'>
                <div className="main-space">
                    <div className='MainHotel'>
                        <div className='left-mh'>
                            <img className='img-mh' src={ditaisCities.photo} alt="Hotel Photo" />
                        </div>
                        <div className='right-mh'>
                            <h1>{ditaisCities.name} </h1>
                            <h3>Capacidad: {ditaisCities.population} </h3>
                        </div>
                    </div>
                </div>
                <div class="show-space">
                </div>
            </div>
  )
}
export default DitailsCities

