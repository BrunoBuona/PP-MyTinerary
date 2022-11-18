import './NewCity.css'
import React, { useRef } from 'react';
import axios from 'axios';
import {BASE_URL} from '../../api/url' 
function NewCity() {

    let information = useRef()
    let nameCity = useRef()
    let continentCity = useRef()
    let photoCity = useRef()
    let populationCity = useRef()

    function newCity(evento){
        let newCity = {
            name: nameCity.current.value,
            continent: continentCity.current.value,
            photo: photoCity.current.value,
            population: populationCity.current.value,
            userId: "636e884578fa70e8f8c471f7"
        }
        axios.post(`${BASE_URL}/api/cities`,newCity)
        information.current.reset()
        evento.preventDefault()
    }

    return (
        <>
            <form className="form-hotel"  onSubmit={newCity} ref={information}>
                <div className="form-body">
                    <h1 className='title'>New Place</h1>
                    <h2 className='title2'>¡Create new City!</h2>
                    <input
                        type="text"
                        placeholder="Name of city"
                        className='form__input'
                        ref={nameCity}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Continent"
                        className='form__input'
                        ref={continentCity}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Photo (URL)"
                        className='form__input'
                        ref={photoCity}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Population"
                        className='form__input'
                        ref={populationCity}
                        required
                    />
                    <div className="submit">
                        <button className='submit2'/*  onClick={submit} */>Create</button>
                    </div>
                </div>
            </form>
        </>
    );
};


export { NewCity }