import React from 'react'
import "./DitailsCities.css"
import { useParams } from 'react-router-dom'
import { cities } from '../../data/cities.js'
import { activity } from '../../data/citiesActivity.js'


const DitailsCities = () => {

    let { eId} = useParams()
    
    let ditaisCities = cities.find( citys => citys.id === eId)
    let activities = activity.filter(acs => acs.citiId === eId)
console.log(activities);

  return (
    <>
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
            
{
            <div>
                
                {activities.map((e) =>{
                    return(
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
                    )
                })}
            </div>
}
</div>
    </>

                    
)}
export default DitailsCities

