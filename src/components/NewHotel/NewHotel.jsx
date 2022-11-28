import './NewHotel.css'
import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/url'
import { useRef } from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function NewHotels() {
    let token = useSelector((store) => store.loginReducer.token)
    const nameRef = useRef()
    const capacityRef = useRef()
    const photoRef = useRef()
    const userId = useRef(token.id)
    const citiId = useRef()
    const navigate = useNavigate();
    const [cityList, setCityList] = useState([])
    useEffect(() => {
        return async function fetchdata() {
               await axios.get(`${BASE_URL}/api/mycities/`).then(res => {
                let data = res.data.response
                setCityList(data)
            })
        }
    }, [])
    async function submit(e){
        e.preventDefault();
        const dataHotel ={
            name: nameRef.current.value,
            capacity: capacityRef.current.value,
            photo: photoRef.current.value,
            userId: userId.current,
            citiId: citiId.current.value
        }
        try{
            let res = await axios.post(`${BASE_URL}/api/hotels`, dataHotel)
            let res2 = await axios.get(`${BASE_URL}/api/hotels`)
            let hotelCreated = res2.data.response
            if(res.data.success){
                let timerInterval
                Swal.fire({
                  title: 'Hotel was Created succesfully!',
                  html: 'Redirecting to that page in <b></b> miliseconds.',
                  timer: 1500,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                      b.textContent = Swal.getTimerLeft()
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                    hotelCreated.filter(e => e.name === dataHotel.name).map(e => navigate(`/detailshotels/${e._id}`))
                  }
                }).then((result) => {
                  /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                  }
                })
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'We found an error...',
                    text: `Errors: ${res.data.message.join(', ')}`,
                  })
            }
        }catch(err){
            if(err.response.data.message === `hotels validation failed: userId: Cast to ObjectId failed for value "${dataHotel.userId}" (type string) at path "userId" because of "BSONTypeError"`){
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'User ID is invalid. Please try again!',
                  })
            }else if(err.response.data.message === `hotels validation failed: citiId: Cast to ObjectId failed for value "${dataHotel.citiId}" (type string) at path "citiId" because of "BSONTypeError"`){
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'City ID is invalid. Please try again!',
                  })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'User ID and City ID are invalid. Please try again!',
                  })
            }
        }
    }
    return (
  
            <form className="form-hotel2" onSubmit={submit}>
                <div className="form-body2">
                    <h1 className='title'>New Hotel</h1>
                    <h2 className='title2'>¡Create Hotel Card!</h2>
                    <input
                        type="text"
                        placeholder="Hotel Name"
                        className='form__input'
                        ref={nameRef}
                    />
                    <input
                        type="text"
                        placeholder="Photo (URL)"
                        className='form__input'
                        ref={photoRef}
                    />
                    <input
                        type="text"
                        placeholder="Capacity"
                        className='form__input'
                        ref={capacityRef}
                    />
                    <select
                    type="text"
                    placeholder="Hotel ID"
                    className='form__input_show'
                    ref={citiId}
                ><option value="">Choose an Hotel</option>
                {cityList.map((hotel) => {
                    return (
                        <option value={hotel._id}>{hotel.name}</option>
                    )
                })} </select>
                    <div className="submit">
                        <button className='submit2'>Create</button>
                    </div>
                </div>
            </form>
    );
};


export { NewHotels }