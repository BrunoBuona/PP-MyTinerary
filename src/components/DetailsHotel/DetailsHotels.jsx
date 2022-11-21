import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../../api/url'
import './DetailsHotels.css'
import { ShowPrinter } from './Show.jsx'

export function DetailsH() {
    let { id } = useParams()
    const [data, setData] = useState({});
    const [img, setImage] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/api/hotels/${id}`).then((res) => {
            setData(res.data.response)
            setImage(res.data.response.photo)
        })
    }, [id])
    return (
        <>
            <div className='main-details'>
                <div className="main-space">
                    <div className='MainHotel'>
                        <div className='left-mh'>
                            <img className='img-mh' src={img[0]} alt="Hotel at Front" />
                        </div>
                        <div className='right-mh'>
                            <h1>{data.name} </h1>
                            <h3>Capacidad: {data.capacity} </h3>
                        </div>
                    </div>
                </div>
                <div className="show-space">
                    <ShowPrinter />
                </div>
            </div>

        </>
    )
}