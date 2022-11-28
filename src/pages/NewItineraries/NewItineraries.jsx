import '../../components/NewShow/NewShow.css'
import React from 'react';
import axios from 'axios';
import { useRef } from 'react';
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../api/url';
import { useState } from 'react';
import { useEffect } from 'react';
export default function NewItineraries() {

    let token = useSelector((store) => store.loginReducer.token)
    const cityId = useRef()
    const name = useRef()
    const photo = useRef()
    const description = useRef()
    const price = useRef()
    const duration = useRef()
    const userId = useRef(token.id)
    const formRef = useRef()
    const [cityList, setCityList] = useState([])
    useEffect(() => {
        return async function fetchdata() {
               await axios.get(`${BASE_URL}/api/cities/`).then(res => {
                let data = res.data.response
                setCityList(data)
            })
        }
    }, [])
    async function submit(e) {
        e.preventDefault()

        const dataShow = {
            cityId: cityId.current.value,
            name: name.current.value,
            photo: photo.current.value,
            description: description.current.value,
            price: price.current.value,
            duration: duration.current.value,
            userId: userId.current
         
        }
        try {
            let res = await axios.post(`${BASE_URL}/api/itineraries`, dataShow)
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
                <h1 className='title'>New Itinerary</h1>
                <h2 className='title2'>¡Create Itinerary Card!</h2>
                <input
                    type="text"
                    placeholder="Itinerary Name"
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
                    placeholder="Description of the Itinerary"
                    className='form__input_show'
                    ref={description}
                />
                <input
                    type="number"
                    placeholder="Price of the Itinerary"
                    className='form__input_show'
                    ref={price}
                />
                <input
                    type="number"
                    placeholder="Duration of the Itinerary"
                    className='form__input_show_date'
                    ref={duration}
                />
                <select
                    type="text"
                    placeholder="City ID"
                    className='form__input_show'
                    ref={cityId}
                >
                <option value="">Choose an City</option>
                    {cityList.map((city) => {
                        return (
                            <option value={city._id}>{city.name}</option>
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

