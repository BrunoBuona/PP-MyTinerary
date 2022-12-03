import { useRef } from 'react';
import { React, useState, useEffect } from 'react';
import './Comments.css';
import './NewComments.css'
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
    const reloadstate = useSelector((store) => store.commentsReducer)
    console.log(reloadstate)
    // Refs
    const formRef = useRef()
    const date = useRef(new Date())
    const showId = useRef(prop.id)
    const comment = useRef()
    let user2 = useSelector((store) => store.tokenReducer)
    let userToken = user2.tokenKey
    const commentRef = useRef()
    const dateRef = useRef(new Date())
    const itineraryIdRef = useRef(idShow)
    // Inicialización y recarga de comentarios
    const [listComments, setListComments] = useState([])
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(true)
    useEffect(() => {
        getComments()    
    }, [reload])

    // Funciones

    async function submit2(e) {
        e.preventDefault();
            Swal.fire({
                title: '¿Publish comment?',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'Yes, publish it.',
                denyButtonText: `No, i miss something...`,
            }).then((result) => {
                if (result.isConfirmed) {
                    publishComment()
                    setReload(!reload)
                }
              })
        }
        async function publishComment(){
            const dataComment = {
                showId: itineraryIdRef.current,
                comment: commentRef.current.value,  
                date: dateRef.current,
            }
            try{
                let datos = {
                    token: userToken,
                    data: dataComment
                }
                let res = await dispatch(commentsActions.createComment(datos))
                if(res.payload.data.success){
                    formRef.current.reset()
                   return( 
                    Swal.fire('Comment published!', '', 'success')
                    )
                }
                else{
                    Swal.fire(`Errors: ${res.payload.data.message.join(", ")}`)
                }
            }catch(err){
                Swal.fire(`Error. You must be logged in.`)
            }}

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
      const handleOpen = () => {
        open ? setOpen(false) : setOpen(true);
      };
    return (
        <>
        <div className='text-center'>
            <form ref={formRef}  onSubmit={submit2}>
                <h2 className='text-center'>Add a new comment</h2>
                <textarea className='textarea' cols="30" rows="10" placeholder='Write a review...' ref={commentRef}></textarea>
                <div className='btns-textarea'>
                <button className='red-btn' type="reset">Clean</button>
                <button className='green-btn'>Send</button>
                </div>
            </form>
        </div>
        <div className="btn-view">
        <h4 onClick={handleOpen}>
          {open ? "Close " : ""}
          View Comments
        </h4>
      </div>
      {open ? (
        <div>
        {listComments.map((e) => {
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
        })}
        </div>
        ) : (
            ""
        )}
        </>
    )
}