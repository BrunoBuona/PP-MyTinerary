import React from 'react'
import { useParams } from 'react-router-dom'
import { showList } from '../../data/show'
export function ShowPrinter() {
    let { eId } = useParams()
    let shows = showList.filter((e) => e.hotelId === eId)
    console.log(shows.length)

    return (
            shows.map((e)=> {
                return(
        <div className='MainShow'>
            <div className='left-mh'>
                <img class='img-mh' src={e.photo} alt="Show Photo" />
            </div>
            <div className='right-mh'>
                <h3>{e.name} </h3>
                <p>{e.description}</p>
                <p>Price: U$D{e.price} </p>
            </div>
        </div>)})
    )}
 
    

