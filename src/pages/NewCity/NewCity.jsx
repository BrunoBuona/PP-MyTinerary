import './NewCity.css'
import React, { useRef } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/url'
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useEffect } from 'react';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
function NewCity() {
    const navigate = useNavigate()
    const token = useSelector((store) => store.loginReducer.token)
    const [continents, setCheckCities] = useState([])
    const userId = useRef(token.id)
    const nameCity = useRef()
    const continentCity = useRef()
    const populationCity = useRef()
    const photoCity = useRef()

    useEffect(() => {
        return async function fetchdata() {
            axios.get(`${BASE_URL}/api/cities`)
                .then(res => {
                    let continent = Array.from(new Set(res.data.response.map(e => e.continent)))
                    setCheckCities(continent)
                })
        }
    }, [])

    async function submit(e) {
        e.preventDefault()
        const dataCity = {
            name: nameCity.current.value,
            continent: continentCity.current.value,
            population: populationCity.current.value,
            photo: photoCity.current.value,
            userId: userId.current
        }
        try {
            let res = await axios.post(`${BASE_URL}/api/cities`, dataCity)
            let res2 = await axios.get(`${BASE_URL}/api/cities`)
            let citiesCreated = res2.data.response
            if (res.data.success) {
                Swal.fire({
                    title: 'City was Created succesfully!',
                    html: 'Redirecting to that page in <b></b> miliseconds.',
                    timer: 2000,
                    timerProgressBar: true,
                    willClose: () => {
                        citiesCreated.filter(e => e.name === dataCity.name).map(e => navigate(`/detailscities/${e._id}`))
                    }
                })}
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'We found an error...',
                    text: `Errors: ${res.data.message.join(', ')}`,
                })
            }
        } catch (err) {
            if(err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'User ID is invalid. Please try again!',
                })
            }
        }
    }

    return (
        <>
            <form className="form-hotel" >
                <div className="form-body2">
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
                    <select
                        type="text"
                        className="select"
                        ref={continentCity}>
                        <option value="">Choose City's Continent</option>
                        {continents.map((continent) => {
                            return (
                                <option value={continent}>{continent}</option>
                            )
                        })} </select>
                    <div className="submit">
                        <button className='submit2' onClick={submit}>Create</button>
                    </div>
                </div>
            </form>
        </>
    )
}


export { NewCity }