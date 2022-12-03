import { React } from 'react';
import './NewComments.css'
import { useDispatch, useSelector } from 'react-redux';
import commentsActions from '../../redux/actions/commentsActions';
import { useRef } from 'react';
import Swal from 'sweetalert2'
import { useState } from 'react';
export default function NewComments(prop) {
    const { id } = prop
    let user = useSelector((store) => store.tokenReducer)
    let userToken = user.tokenKey
    const commentRef = useRef()
    const dateRef = useRef(new Date())
    const itineraryIdRef = useRef(id)
    const formRef = useRef()
    const dispatch = useDispatch()
    const [state, setstate] = useState(false)
    async function submit(e) {
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
                await dispatch(commentsActions.reload(!state))
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
            }
        }
    return (
        <div className='text-center'>
            <form ref={formRef}  onSubmit={submit}>
                <h2 className='text-center'>Add a new comment</h2>
                <textarea className='textarea' cols="30" rows="10" placeholder='Write a review...' ref={commentRef}></textarea>
                <div className='btns-textarea'>
                <button className='red-btn' type="reset">Clean</button>
                <button className='green-btn'>Send</button>
                </div>
            </form>
        </div>
    ) 
    }