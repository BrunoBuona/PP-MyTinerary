import './NewHotel.css'
import React, { useState } from 'react';
import { hotels } from '../../data/hotels';

function NewHotels() {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [capacity, setCapacity] = useState('');
    const [city, setCity] = useState('');

    let names = hotels.map(e => e.citiId.toUpperCase());
    const submit = () => {
        if (name === "" || photo === "" || capacity === "" || city === "") {
            alert("Please fill in all fields");
        } else {
            let newHotel = { name,photo,capacity,city }
            localStorage.setItem("newHotel", JSON.stringify(newHotel));
        }
    };
    return (
        <>
            <form className="form-hotel">
                <div className="form-body">
                    <h1 className='title'>New Itinerary</h1>
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
                    <select onChange={e => setCity(e.target.value)}>
                        <option value="0">Select a city</option>
                        {names.map((e, i) => <option key={i} value={e}>{e}</option>)}
                    </select>
                    <div className="submit">
                        <button className='submit2' onClick={submit}>Create</button>
                    </div>
                </div>
            </form>
        </>
    );
};


export { NewHotels }