import React from 'react'
import "./DitailsCities.css"
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {BASE_URL} from '../../api/url' 

const DitailsCities = () => {

    const [citi, setCiti] = useState([])
    const [itinerarios, setItinerarios] = useState([])

    let { id } = useParams()

    useEffect(() => {
        axios.get(`${BASE_URL}/api/cities/${id}`)
            .then(res => setCiti(res.data.data))
            .catch((error) => console.log(error))

        axios.get(`${BASE_URL}/api/itineraries?cityId=${id}`)
            .then(res => setItinerarios(res.data.response))
            .catch((error) => console.log(error))
    }, [id])
console.log(itinerarios);
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
                                <h1>{citi.name} </h1>
                                <h3>Capacidad: {citi.population} </h3>
                            </div>
                        </div>
                    </div>
                </div>
            {itinerarios.map((e) => {
                return(
                                    <div>
                    <div className='main-details-City'>
                        <h3 className='h3-actividades'>Activity!</h3>
                        <div className="main-space">
                            <div className='MainHotel'>
                                <div className='left-mh'>
                                    <img class='img-mh' src={e.photo[0]} alt={e.name} />
                                    <img class='img-mh' src={e.photo[1]} alt={e.name} />
                                    <img class='img-mh' src={e.photo[2]} alt={e.name} />
                                </div>
                                <div className='right-mh'>
                                    <h3>{e.name}</h3>
                                    <p>{e.description}</p>
                                    <p>Price: {e.price} $USD</p>
                                </div>
                            </div>
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

