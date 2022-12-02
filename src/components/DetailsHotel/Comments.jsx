import { React, useState, useEffect } from 'react';
import axios from 'axios'
import { BASE_URL } from '../../api/url'
import './Comments.css'
import { useSelector } from 'react-redux';

export default function Comments(prop) {
    let id = prop
    let user = useSelector((store) => store.loginReducer)
    let token = user.token.id
    console.log(token)
    const [comments, setComments] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/api/comment?showId=${prop.id}`)
            .then((res) => {
                console.log(res)
                setComments(res.data.response);
            });
    },);
return (
            comments.map((e)=> {
                return(
                 <div className={`comment-box ${token === e.userId._id ? "own-comment" : ""}`}>
                    <div className='profile-comment-box'>
                    <img className='picture-comment-box' src={`${e.userId.photo}`} alt={`${e.name}`} />
                    </div>
                    <div className='rows-comment-box'>
                    <div className='data-comment-box'>
                    <p>
                     {e.userId.name}
                    </p> 
                    <p className='comment-date'>
                    {new Date(e.date).toLocaleDateString()}
                    </p>
                    </div>
                    <div className='body-comment-box'>
                    {e.comment}
                    </div>
                    <div className={`none ${token === e.userId._id ? "own-comment-btns" : ""}`}> 
                    <button>Editar</button>
                    <button>Borrar</button>
                    </div>
                    </div>
                </div>
            )})
    )
}