import React, { useState, useEffect } from "react";
import "./Cities.css";
import { CitiesPrinter } from "../../components/CitiesPrinter/CitiesPrinter";
import axios from "axios";

/* import { BASE_URL } from "../../api/url"; */


function Cities3() {

    let [checkbox,setCheckbox] = useState([])
    let [cities,setCities] = useState([])
    let [check,setCheck] = useState([])
    let [search,setSearch] = useState('')
    
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/cities`)
        .then(res => setCheckbox(res.data.response))
        .catch(err => console.log(err.message))
    },[])
    
    useEffect(() => {
        let filtro = check.slice()
        if(check.length > 0){
            filtro = check.join(',')
        }
        axios.get(`http://localhost:8000/api/cities?name=${search}&continent=${filtro}`)
        .then(res => setCities(res.data.response))
        .catch(err => console.log(err.message))
    },[search,check])
    
    
    let checkControl = (e) => {
        let axuiliarChec = [...check]
        if(e.target.checked){
            axuiliarChec.push(e.target.value)
        }else{
            axuiliarChec = axuiliarChec.filter(element => element !== e.target.value)
        }
        setCheck(axuiliarChec)
    }
    
    let inputControl = (e) => {
        setSearch(e.target.value)
    }

    
    return (
        <>
            <div className="main-cities">
                <div className="filtros-cities">
                    <div className="select-container">
                        <label className="searchText">¡Search by Continent!</label>
                        <div>
                        {
                            Array.from(new Set(checkbox.map(city => city.continent))).map(e =>{
                                return(
                                <label className='check-label' key={e}>
                                    <input onClick={checkControl} type='checkbox' value={e} /> {e}
                                </label>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="search-container">
                        <h3>¡Search by Continent!</h3>
                            <input type="search" onChange={inputControl} />
                    </div>

                </div>
                    <div className="cities-container">
                    {
                        cities.length > 0 ?
                        cities.map(i => <CitiesPrinter name={i.name} id={i._id} img={i.photo} />):
                        <div className="cardt-not">
                            <h3>It was not found {search}</h3>
                        </div>
                    }
                    </div>
            </div>
        </>
    )}

export { Cities3 };

/*         function printCards(evento) {
            return evento.map((e) => (
                <div className="cities-container">
                    <CitiesPrinter name={e.name} img={e.photo} id={e._id} />
                </div>
            ));
        } */