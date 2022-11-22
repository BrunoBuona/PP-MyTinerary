import './NewCity.css'
import React, { useRef } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/url'
import Swal from 'sweetalert2';
function NewCity() {

    const nameCity = useRef()
    const continentCity = useRef()
    const populationCity = useRef()
    const photoCity = useRef()
    const userIdRef = useRef()

    async function submit(e) {
        e.preventDefault()
        const dataCity = {
            name: nameCity.current.value,
            continent: continentCity.current.value,
            population: populationCity.current.value,
            photo: photoCity.current.value,
            userId: userIdRef.current.value
        }
        try {
            let res = await axios.post(`${BASE_URL}/api/cities`, dataCity)
            let res2 = await axios.get(`${BASE_URL}/api/cities`)
            let citiesCreated = res2.data.response
            if (res.data.success) {
                let timerInterval
                Swal.fire({
                    title: 'City was Created succesfully!',
                    html: 'Redirecting to that page in <b></b> miliseconds.',
                    timer: 2500,
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
                        citiesCreated.filter(e => e.name === dataCity.name).map(e => window.location.href = `/detailscities/${e._id}`)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'We found an error...',
                    text: `Errors: ${res.data.message.join(', ')}`,
                })
            }
        } catch (err) {
            if (err.response.data.message === `hotels validation failed: userId: Cast to ObjectId failed for value "${dataCity.userId}" (type string) at path "userId" because of "BSONTypeError"`) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'User ID is invalid. Please try again!',
                })
            } else if (err.response.data.message === `cities validation failed: citiId: Cast to ObjectId failed for value "${dataCity.citiId}" (type string) at path "citiId" because of "BSONTypeError"`) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'City ID is invalid. Please try again!',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'User ID and City ID are invalid. Please try again!',
                })
            }
        }
    }

    return (
        <>
            <form className="form-hotel" >
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
                    <input
                        type="text"
                        placeholder="Admin"
                        className='form__input'
                        ref={userIdRef}
                        required
                    />
                    <div className="submit">
                        <button className='submit2' onClick={submit}>Create</button>
                    </div>
                </div>
            </form>
        </>
    )
}


export { NewCity }