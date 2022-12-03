import { useRef } from 'react';
import { React, useState, useEffect } from 'react';
import './Comments.css'
import commentsActions from '../../redux/actions/commentsActions';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export default function Comments(prop){
    // Asignaciones de importacion/props
    const dispatch = useDispatch()
    let idShow = prop.id

    // Store
    let user = useSelector((store) => store.loginReducer)
    let tokenKey = useSelector((store) => store.tokenReducer.tokenKey)
    let token = user.token.id

    // States
    const [comments, setComments] = useState([])
    const [editComment, setEdit] = useState(false)
    const [commentary, setCommentary] = useState('')

    // Refs
    const formRef = useRef()
    const date = useRef(new Date())
    const showId = useRef(prop.id)
    const comment = useRef()

    // Inicialización y recarga de comentarios
    const [listComments, setListComments] = useState([])
    const [reload, setReload] = useState(true)
    useEffect(() => {
        getComments()    
    }, [reload])

    // Funciones
    async function getComments() {
        let res = await dispatch(commentsActions.getCommentShow(idShow))
        setListComments(res.payload.data)
        setReload(false)
    }
    function submit(e) {
        Swal.fire({
            title: '¿Delete Comment?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Yes, publish it.',
            denyButtonText: `No, i miss something...`,
        }).then((result) => {
            if (result.isConfirmed) {
                let datos = {
                    token: tokenKey,
                    id: e
                }
             dispatch(commentsActions.deleteComment(datos))
             setReload(!reload)
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
                const newUpdate = {
                    comment: commentary,
                    date: date.current,
                    showId: showId.current
                }
                let datos = { 
                    token: tokenKey,
                    id: e,
                    newUpdate: newUpdate
                }
                dispatch(commentsActions.editComment(datos))
                setEdit(false)
                setReload(!reload)
            }
        })
    }
    return (
        listComments.map((e) => {
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
                                            ref={comment}
                                            type="text"
                                            onKeyUp={(e) => {
                                                setCommentary(e.target.value)
                                            }
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