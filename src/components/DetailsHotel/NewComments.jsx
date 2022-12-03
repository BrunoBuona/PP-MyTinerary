import { React } from 'react';
import './NewComments.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../../api/url';
import { useRef } from 'react';
import Swal from 'sweetalert2'
import { useState } from 'react';
// usar reload para recargar los comentarios, cada vez q se use un dispatch, mandar el cambio de estado de reload.
// los dispatch solo traeran datita rika, pero no recargaran la pagina, por eso esta el reload.
// el reload es un booleano, que se cambia con un setReload(!reload)
// y se usa en el useEffect, para que cada vez que se cambie el estado de reload, se recargue el componente.
export default function NewComments(prop) {
    const { id } = prop
    let user = useSelector((store) => store.tokenReducer)
    let userToken = user.tokenKey
    const commentRef = useRef()
    const dateRef = useRef(new Date())
    const itineraryIdRef = useRef(id)
    const formRef = useRef()
    const [reload, setReload] = useState(false)

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
                let res = await axios.post(`${BASE_URL}/api/comment/`, dataComment, {headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
                })  
                if(res.data.success){
                    formRef.current.reset()
                   return( 
                    Swal.fire('Comment published!', '', 'success')
                    )
                }
                else{
                    Swal.fire(`Errors: ${res.data.message.join(", ")}`)
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