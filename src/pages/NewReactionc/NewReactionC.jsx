import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../../redux/actions/reactionActions'
import Swal from 'sweetalert2'
import './newReaction.css'
import axios from "axios";
import {BASE_URL} from '../../api/url'


export default function NewReactionC() {

    const dispatch = useDispatch()
    let token = useSelector((store) => store.loginReducer.token);
    const { tokenKey } = useSelector((store) => store.tokenReducer)
    console.log(token);
    const { createReaction } = reactionActions
    let [itinerary, setItinerary] = useState([]);
    const formRef = useRef()
    const nameRef = useRef()
    const iconRef = useRef()
    const iconBackRef = useRef()
    const itineraryIdRef = useRef()



    useEffect(() => {
        axios.get(`${BASE_URL}/api/itineraries`)
            .then((res) => setItinerary(res.data.response))
            console.log('estoy en new reaction');
    },[])

    async function sendForm(e) {
        e.preventDefault()
        console.log('hola estoy aca');
        let data = {
            tokenKey,
            reaction: {
                name: nameRef.current.value,
                icon: iconRef.current.value,
                iconBack: iconBackRef.current.value,
                itineraryId: itineraryIdRef.current.value,
                userId: []
            }
        }
        console.log(data);
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
                        console.log(res);
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
        <h1 className='title-reactions'>New Reactions</h1>
    <form className='form-new-reac' ref={formRef}>       
          <label className='label-formnew'>
            Name:
            <input className='inputinShow' type='text' id='nameInput' ref={nameRef} required/>
          </label>
          <label className='label-formnew'>
            Icon:
            <input className='inputinShow' type='text' id='iconInput' ref={iconRef} required/>
          </label>
          <label className='label-formnew'>
            Icon back:
            <input className='inputinShow' type='text' id='iconbackInput' ref={iconBackRef} required />
          </label>
          <select
                type="text"
                placeholder="itineraries ID"
                className='form__inputShow'
                ref={itineraryIdRef}
                >
                <option value="">Choose an Itinerary</option>
                    {itinerary.map((itinerary) =>
                            <option key={itinerary._id} value={itinerary._id}>{itinerary.name}</option> 
                    )}
           </select>
          <div className='container-submit-react'>
            <input onClick={sendForm} className="submitsignup" type='button' value='Submit' />
          </div>
    </form>
    </div>    
    )
}