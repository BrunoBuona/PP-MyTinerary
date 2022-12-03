import axios from "axios"
import { useEffect } from "react"
import { BASE_URL } from "../../../api/url"
import { useState } from "react"
import { useSelector } from 'react-redux';

export default function SeeProfile() {
    let temp = "temp"
    const [user, setUser] = useState([])
    let token = useSelector((store) => store.loginReducer.token)
    useEffect(() => {
        return async function fetchdata() {
            await axios.get(`${BASE_URL}/api/auth/me/${token.id}`).then(res => {
                let userdata = res.data.response
                setUser(userdata)
            })
        }
    }, [])
    return (
        <>
            <div className="col-2-header">
                <h1>Your Profile</h1>
            </div>
            <div className='userData-cols'>
                <form className='col-2-userData-1'>
                    <label className='label-profile'> Name: </label>
                    <input className='input-profile' type="text" value={`${user.name}`} disabled />
                    <label className='label-profile'> LastName: </label>
                    <input className='input-profile' type="text" value={`${user.lastName}`} disabled />
                    <label className='label-profile'> Photo: </label>
                    <input className='input-profile' type="text" value={`${user.photo}`} disabled />
                </form>
                <form className='col-2-userData-2'>
                    <label className='label-profile'> Age: </label>
                    <input className='input-profile' type="number" value={`${user.age}`} disabled />
                    <label className='label-profile'> Email: </label>
                    <input className='input-profile' type="text" value={`${user.email}`} disabled />
                </form>
            </div>
        </>)
}