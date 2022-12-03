import { React, useState , useEffect} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../api/url'
import Comments from './Comments';

export function ShowPrinter() {
    let [push, setPush] = useState(false);
    let { id } = useParams()
    const [shows,setShows] = useState([])
    const [reload, setReload] = useState(true)
    useEffect(() => {
      axios.get(`${BASE_URL}/api/shows?hotelId=${id}`)
      .then((res) => {
        setShows(res.data.response);
      });
    },[]);
    return (
            shows.map((e)=> {
                return(
        <div className='MainShow'>
            <div className='left-mh'>
                <img className='img-mh' src={e.photo} alt="Show Photo" />
            </div>
            <div className='right-mh'>
                <h3 key={e.id}>{e.name} </h3>
                <p key={e.id}>{e.description}</p>
                <p key={e.id} >Price: U$D{e.price} </p>
            </div>
            <div className='columns-comments'>
             <Comments id={e._id}/> 
            </div>
        </div>)})
    )}
 
    

