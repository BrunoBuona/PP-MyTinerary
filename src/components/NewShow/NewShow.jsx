import './NewShow.css'
import React from 'react';
import axios from 'axios';
import { useRef } from 'react';
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../api/url';
import { useState } from 'react';
import { useEffect } from 'react';
export default function NewShows() {

    let token = useSelector((store) => store.loginReducer.token)
    const hotelId = useRef()
    const name = useRef()
    const description = useRef()
    const photo = useRef()
    const price = useRef()
    const date = useRef()
    const userId = useRef(token.id)
    const formRef = useRef()
    const [hotelList, setHotelList] = useState([])
    useEffect(() => {
        return async function fetchdata() {
               await axios.get(`${BASE_URL}/api/myhotels/`).then(res => {
                let data = res.data.response
                setHotelList(data)
            })
        }
    }, [])
    async function submit(e) {
        e.preventDefault()

        const dataShow = {
            hotelId: hotelId.current.value,
            name: name.current.value,
            description: description.current.value,
            photo: photo.current.value,
            price: price.current.value,
            date: date.current.value,
            userId: userId.current
         
        }
        try {
            let res = await axios.post(`${BASE_URL}/api/shows/create`, dataShow)
            if (res.data.success) {
                Swal.fire({
                    title: 'Show was Created succesfully!',
                    timer: 1500,
                    timerProgressBar: true,
                })
                  formRef.current.reset()
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'We found an error...',
                    text: `Errors: ${res.data.message}`,
                })
            }
        } catch (err) {
            if(err.response.data.message === `shows validation failed: hotelId: Cast to ObjectId failed for value "" (type string) at path "hotelId" because of "BSONTypeError"`){
                Swal.fire({
                    icon: 'error',
                    title: '¡You must select a hotel!',
                  })
        }
    }}
    return (

        <form ref={formRef} className="form-hotel3" onSubmit={submit}>
            <div className="form-body3">
                <h1 className='title'>New Show</h1>
                <h2 className='title2'>¡Create Show Card!</h2>
                <input
                    type="text"
                    placeholder="Show Name"
                    className='form__input_show'
                    ref={name}
                />
                <input
                    type="text"
                    placeholder="Photo (URL)"
                    className='form__input_show'
                    ref={photo}
                />
                <input
                    type="text"
                    placeholder="Description of the Show"
                    className='form__input_show'
                    ref={description}
                />
                <input
                    type="text"
                    placeholder="Price of the Show"
                    className='form__input_show'
                    ref={price}
                />
                <input
                    type="date"
                    className='form__input_show_date'
                    ref={date}
                />
                <select
                    type="text"
                    placeholder="Hotel ID"
                    className='form__input_show'
                    ref={hotelId}
                >
                <option value="">Choose an Hotel</option>
                    {hotelList.map((hotel) => {
                        return (
                            <option value={hotel._id}>{hotel.name}</option>
                        )
                    })}
                </select>
                <div className="submit">
                    <button className='submit2'>Create</button>
                </div>
            </div>
        </form>
    );
};


