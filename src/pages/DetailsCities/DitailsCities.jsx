import React from 'react'
import "./DitailsCities.css"
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../../api/url'
import Comments from './Comments'
import {CardItinerary} from './CardItinerary'

const DitailsCities = () => {

    const [citi, setCiti] = useState([])
    const [itinerarios, setItinerarios] = useState([])
    const [push, setPush] = useState(false);

    let { id } = useParams()

    useEffect(() => {
        axios.get(`${BASE_URL}/api/cities/${id}`)
            .then(res => setCiti(res.data.data))
            .catch((error) => console.log(error))

        axios.get(`${BASE_URL}/api/itineraries?cityId=${id}`)
            .then(res => setItinerarios(res.data.response))
            .catch((error) => console.log(error))
    }, [id])
    if (citi.length !== 0) {
        return (
            <>
                <div className='main-details-City'>
                    <div className="main-space">
                        <div className='MainHotel'>
                            <div className='left-mh'>
                                <img className='img-mh' src={citi.photo} alt={citi.name} />
                            </div>
                            <div className='right-mh'>
                                <h1>{citi.name}</h1>
                                <h3>Capacidad: {citi.population} </h3>
                            </div>
                        </div>
                    </div>
                </div>
                {itinerarios.map((e) => {
                    console.log(e._id)
                    return (
                        <div className='center-all'>
                            <div className='main-details-City'>
                                <h3 className='h3-actividades'>Activity!</h3>
                                <div className="main-space">
                                <CardItinerary
                                key={e._id}
                                id={e._id}
                                name={e.name}
                                photo={e.photo}
                                price={e.price}
                                duration={e.duration}
                                description={e.description} 
                                />
                                </div>
                                <div className='center-all'>
                                  <Comments id={e._id} />
                            </div>
                            </div>
                        </div>

                    )
                })}
            </>
        )
    }

}
export default DitailsCities



