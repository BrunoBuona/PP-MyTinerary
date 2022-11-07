import './DetailsHotels.css'
import { hotels } from '../../data/hotels.js'
import { useParams } from 'react-router-dom'
import { ShowPrinter } from './Show.jsx'


export function DetailsH() {
    let { eId } = useParams()
    console.log(eId)

    let hotelSelected = hotels.find((e) => e.id === eId)


    return (
        <>
            <div className='main-details'>
                <div className="main-space">
                    <div className='MainHotel'>
                        <div className='left-mh'>
                            <img className='img-mh' src={hotelSelected.photo[0]} alt="Hotel Photo" />
                        </div>
                        <div className='right-mh'>
                            <h1>{hotelSelected.name} </h1>
                            <h3>Capacidad: {hotelSelected.capacity} </h3>
                        </div>
                    </div>
                </div>
                <div class="show-space">
                <ShowPrinter/>
                </div>
            </div>

        </>
    )
}