import React, { useState } from "react";
import "./Cities.css";
import { CitiesPrinter } from "./CitiesPrinter";
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../../api/url";
import { cities } from "../../data/cities";

function Cities3() {

    const [cities2, setCities] = useState([])
    const [checkbox, setCheckbox] = useState([])
    const [inputSearch, setInputSearch] = useState('')
    console.log(inputSearch);
    function DataFeching ({

        useEffect(() => {
            axios.get(`${BASE_URL}/api/cities?name=${inputSearch}&continent=${filtroDeCheck}`)
                .then(response => {
                    setCities(response.data.response)})
                .catch(error => console.log(error))
        },[])
    })
    

    let filtroDeCheck = []
    function Checkbox() {
        function capturacheck(e) {
            filtroDeCheck = filtroDeCheck.concat(e.target.value)
            console.log(filtroDeCheck);
        }
        let continentes = Array.from(new Set(cities.map(e => e.continent)));
        console.log(continentes);
        return continentes.map((e) => {
            return (
                <label>
                    {e}
                    <input onChange={e => capturacheck(e)} type="checkbox" value={e} />
                </label>
            );
        });
    }



    function printCards(evento) {
        return evento.map((e) => (
            <div className="cities-container">
                <CitiesPrinter name={e.name} img={e.photo} id={e._id} />
            </div>
        ));
    }

    return (
        <>
            <div className="main-cities">
                <div className="filtros-cities">
                    <div className="select-container">
                        <label className="searchText">¡Search by Continent!</label>
                        <div>
                            <Checkbox />
                        </div>
                    </div>
                    <div className="search-container">
                        <input type="text" onChange={e=> {setInputSearch(e.target.value)}} />
                    </div>
                </div>
                {cities2.length > 0 ? (
                    printCards(cities2)
                ) : (
                    <div className="cardt-not">
{/*                         <h2>It was not found {inputSeach}</h2> */}
                    </div>
                )}
            </div>
        </>
    );
}

export { Cities3 };
