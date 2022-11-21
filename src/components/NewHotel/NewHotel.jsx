import './NewHotel.css'
import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/url'

function NewHotels() {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [capacity, setCapacity] = useState('');
    const [citiId, setCitiId] = useState('');
    const [userId, setUserId] = useState('');

    const submit = () => {
        if (name === "" || photo === "" || capacity === "") {
            alert("Please fill in all fields");
        } else {
            let newHotel = { name, photo, capacity, citiId, userId };
            axios.post(`${BASE_URL}/api/hotels/create`, newHotel)
                .then(res => {
                    console.log(res);
                })
        }
    };
    return (
        <>
            <form className="form-hotel2">
                <div className="form-body2">
                    <h1 className='title'>New Hotel</h1>
                    <h2 className='title2'>¡Create Hotel Card!</h2>
                    <input
                        type="text"
                        placeholder="Hotel Name"
                        className='form__input'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Photo (URL)"
                        className='form__input'
                        onChange={(e) => setPhoto(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Capacity"
                        className='form__input'
                        onChange={(e) => setCapacity(Number(e.target.value))}
                    />
                    <input
                        type="text"
                        placeholder="City ID"
                        className='form__input'
                        onChange={(e) => setCitiId(e.target.value)}
                        />
                    <input
                        type="text"
                        placeholder="Your User ID"
                        className='form__input'
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    <div className="submit">
                        <button className='submit2' onClick={submit}>Create</button>
                    </div>
                </div>
            </form>
        </>
    );
};


export { NewHotels }