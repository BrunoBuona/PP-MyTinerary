import React, { useState, useEffect, useRef } from "react";
import "./Cities.css";
import { CitiesPrinter } from "../../components/CitiesPrinter/CitiesPrinter";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cityAction from "../../redux/actions/cityAction";
import cityFilterAction from '../../redux/actions/cityFilterActions'
import { BASE_URL } from "../../api/url";
import NewComments from "../../components/DetailsHotel/NewComments";


function Cities3 () {
    let searchRef = useRef(null)
    let [checkCities, setCheckCities] = useState([])
    const dispatch = useDispatch()
    const { setChecked, setSearched } = cityFilterAction
    const filter = useSelector(state => state.CityFilterReducer)
    const { getCities, getFilteredCities } = cityAction
    const { cities } = useSelector(state => state.cityReducer)


    useEffect(() => {
        axios.get(`${BASE_URL}/api/cities`)
            .then(res => setCheckCities(res.data.response))
            .catch(err => console.log(err.message))
    }, [])


    useEffect(() => {
        if (cities.length < 1 && filter.name === '' && filter.continent.length < 1) {
            dispatch(getCities())
        } else {
            dispatch(getFilteredCities(filter))
        }
    },[])



    useEffect(() => {
        dispatch(getFilteredCities(filter))
    },[filter])




    let controlcheck = (e) => {
        let auxArray = [...filter.continent]
        if (e.target.checked) {
            auxArray.push(e.target.value)
        } else {
            auxArray = auxArray.filter(el => el !== e.target.value)
        }
        let checked = auxArray
        dispatch(setChecked(checked))
    }

    let controlsearch  = (e) => {
        let searched = searchRef.current.value
        dispatch(setSearched(searched))
    }


    return (
        <>
            <div className="main-cities">
                <div className="filtros-cities">
                    <div className="select-container">
                        <label className="searchText">¡Search by Continent!</label>
                        <div>
                            {
                                Array.from(new Set(checkCities.map(city => city.continent))).map(e => {
                                    return (
                                        <label className='check-label' key={e}>
                                            <input checked={filter.continent.includes(e) ? true : false} onClick={controlcheck} type='checkbox' value={e} /> {e}
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="search-container">
                        <h3>¡Search by Continent!</h3>
                        <input type="search" ref={searchRef} value={filter.name} onChange={controlsearch } />
                    </div>

                </div>
                <div className="cities-container">
                    {
                        cities.length > 0 ?
                        cities.map(i => <CitiesPrinter name={i.name} id={i._id} img={i.photo} />) :
                            <div className="cardt-not">
                                <h3>It was not found </h3>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export { Cities3 };

