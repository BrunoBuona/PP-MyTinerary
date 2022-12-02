import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../../redux/actions/reactionActions'
import Swal from 'sweetalert2'
import { useRef , useEffect, useState} from 'react'
/* import '../Input/input.css' */
import axios from "axios";
import {BASE_URL} from '../../api/url'


export default function NewReactionC() {

    const dispatch = useDispatch()
    let token = useSelector((store) => store.loginReducer.token);
    console.log(token);
    const userId = token.id
    const { createReaction } = reactionActions
    let [itinerary, setItinerary] = useState([]);
    const formRef = useRef()
    const nameRef = useRef()
    const iconRef = useRef()
    const iconBackRef = useRef()
    const itineraryIdRef = useRef()



   useEffect(() => {
        axios.get(`${BASE_URL}/api/itineraries`, { 
              headers: {
                Authorization: `Bearer${localStorage.getItem("token")}`,
              },
            })
            .then((res) => {
            setItinerary(res.data.response)})
            .catch((err) => err.message);
            
    },[]);

    function sendForm(e) {
        e.preventDefault()
        let data = {
            token,
            reaction: {
                name: nameRef.current.value,
                icon: iconRef.current.value,
                iconBack: iconBackRef.current.value,
                itineraryId: itineraryIdRef.current.value,
                userId: []
            }
        }
        Swal.fire({
            icon: 'info',
            title: 'Do you want to create this reaction?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Create it',
            cancelButtonText: 'Cancel'
        })
            .then(async result => {
                try {
                    if (result.isConfirmed) {
                        let res = await dispatch(createReaction(data))
                        if (res.payload.success) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Reaction successfully created',
                                showConfirmButton: true,
                            })
                            formRef.current.reset()
                        } else {
                            console.log(res.payload)
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                html: res.payload.payload.message,
                            })
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            })
    }

    return (
    <div className='contenedor-form'>
    <form className='form-new-react' ref={formRef}>       
          <label className='label-form-new'>
            Name:
            <input className='inputin-show' type='text' id='nameInput' ref={nameRef} required/>
          </label>
          <label className='label-form-new'>
            Icon:
            <input className='inputin-show' type='text' id='iconInput' ref={iconRef} required/>
          </label>
          <label className='label-form-new'>
            Icon back:
            <input className='inputin-show' type='text' id='iconbackInput' ref={iconBackRef} required />
          </label>
          <select
                    type="text"
                    placeholder="itineraries ID"
                    className='form__input_show'
                    ref={itineraryIdRef}
                >
                <option value="">Choose an Itinerary</option>
                    {itinerary.map((itinerary) =>
                            <option key={itinerary._id} value={itinerary._id}>{itinerary.name}</option> 
                    )}
           </select>
          <div className='container-submit-react'>
            <input onClick={sendForm} className="submit-signup" type='button' value='Submit' />
          </div>
    </form>
    </div>    
    )
}