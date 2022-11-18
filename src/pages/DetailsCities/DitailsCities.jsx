import React from 'react'
import "./DitailsCities.css"
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const DitailsCities = () => {

    const [citi, setCiti] = useState([])
    const [itinerarios, setItinerarios] = useState([])

    let { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cities/${id}`)
            .then(res => setCiti(res.data.data))
            .catch((error) => console.log(error))

        axios.get(`http://localhost:8000/api/itineraries?cityId=${id}`)
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
                                <img className='img-mh' src={citi.photo} alt="Hotel Photo" />
                            </div>
                            <div className='right-mh'>
                                <h1>{citi.name} </h1>
                                <h3>Capacidad: {citi.population} </h3>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className='main-details-City'>
                        <h3 className='h3-actividades'>Activity!</h3>
                        <div className="main-space">
                            <div className='MainHotel'>
                                <div className='left-mh'>
                                    <img class='img-mh' src={itinerarios[0].photo[0]} alt={itinerarios.name} />
                                    <img class='img-mh' src={itinerarios[0].photo[1]} alt={itinerarios.name} />
                                    <img class='img-mh' src={itinerarios[0].photo[2]} alt={itinerarios.name} />
                                </div>
                                <div className='right-mh'>
                                    <h3>{itinerarios[0].name}</h3>
                                    <p>{itinerarios[0].description}</p>
                                    <p>Price: {itinerarios[0].price} $USD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='main-details-City'>
                        <h3 className='h3-actividades'>Activity!</h3>
                        <div className="main-space">
                            <div className='MainHotel'>
                                <div className='left-mh'>
                                    <img class='img-mh' src={itinerarios[1].photo[0]} alt={itinerarios[1].name} />
                                    <img class='img-mh' src={itinerarios[1].photo[1]} alt={itinerarios[1].name} />
                                    <img class='img-mh' src={itinerarios[1].photo[2]} alt={itinerarios[1].name} />
                                </div>
                                <div className='right-mh'>
                                    <h3>{itinerarios[1].name}</h3>
                                    <p>{itinerarios[1].description}</p>
                                    <p>Price: {itinerarios[1].price} $USD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
        )
    }

}
export default DitailsCities

