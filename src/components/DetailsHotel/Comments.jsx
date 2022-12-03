import { useRef } from 'react';
import { React, useState, useEffect } from 'react';
import axios from 'axios'
import { BASE_URL } from '../../api/url'
import './Comments.css'
// import myCommentsAction from '../../redux/actions/myCommentsAction';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export default function Comments(prop) {
    let id = prop
    const date = useRef(new Date())
    const showId = useRef(prop.id)
    const comment = useRef()
    // const dispatch = useDispatch()
    let user = useSelector((store) => store.loginReducer)
    let token = user.token.id
    let tokenKey = useSelector((store) => store.tokenReducer.tokenKey)
    const [comments, setComments] = useState([])
    const [editComment, setEdit] = useState(false)
    const [commentary, setCommentary] = useState('')
    useEffect(() => {
        axios.get(`${BASE_URL}/api/comment?showId=${prop.id}`)
            .then((res) => {
                setComments(res.data.response);
            },);
    },[editComment]);
    async function submit(e) {
        Swal.fire({
            title: '¿Delete Comment?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Yes, publish it.',
            denyButtonText: `No, i miss something...`,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteComment(e)
            }
        })
    }
    async function edit(e, b) {
        b.preventDefault()
        Swal.fire({
            title: '¿Confirm edit?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Yes, publish it.',
            denyButtonText: `No, i miss something...`,
        }).then((result) => {
            if (result.isConfirmed) {
                editComments(e)
                setEdit(false)
            }
        })
    }
    async function deleteComment(e) {
        await axios.delete(`${BASE_URL}/api/comment/${e}`, { headers: { Authorization: `Bearer ${tokenKey}` } })
    }
    async function editComments(e) {
        const newUpdate = {
            comment: commentary,
            date: date.current,
            showId: showId.current
        }
        await axios.put(`${BASE_URL}/api/comment/${e}`, newUpdate, { headers: { Authorization: `Bearer ${tokenKey}` } })
    }
    return (
        comments.map((e) => {
            return (
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
                            <p>{e.comment}</p>
                            <div className={`none ${token === e.userId._id ? "own-comment-btns" : ""}`}>
                                {editComment ?
                                    <form id="myform">
                                    <input
                                     ref= { comment } 
                                     type="text"
                                     onKeyUp={(e) => {
                                        setCommentary(e.target.value)}
                                     }
                                     />
                                    <button onClick={(b) => edit(e._id, b)} form="myform" >Confirm edit</button>
                                    </form>
                                    :
                                    ""}
                            </div>
                        </div>
                        <div className={`none ${token === e.userId._id ? "own-comment-btns" : ""}`}>
                            <button onClick={a => {
                                { editComment ? setEdit(false) : setEdit(true) }
                            }}>Edit</button>
                            <button onClick={a => {

                                submit(e._id)

                            }}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}