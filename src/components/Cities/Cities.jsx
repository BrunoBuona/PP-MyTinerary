import React, { useState } from "react";
import "./Cities.css";
import { CitiesPrinter } from "./CitiesPrinter";
import { Checkbox } from "../checkbox/Checkbox";
import InputSearch from "../inputSearch/InputSeach"
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../../api/url";

function Cities2() {
    let [cities, setCities] = useState([])
    let [inputSeach, setInputSeach] = useState('')

    useEffect(() => {
        axios.get(`${BASE_URL}/api/cities/`)
            .then((res) => setCities(res.data.response))
            .catch((error) => console.log(error));
    }, []);

    
    function search(e) {
        setInputSeach(e.target.value)
        let query = `${BASE_URL}/api/cities?name=${e.target.value}`
        axios.get(query)
            .then(response => setCities(response.data.response))
            .catch(error => console.log(error))
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
                            <Checkbox/>
                        </div>
                    </div>
                    <div className="search-container">
                        <InputSearch setchange={search} dato="search" type="text" />
                    </div>
                </div>
                {cities.length > 0 ? (
                    printCards(cities)
                ) : (
                    <div className="cardt-not">
                        <h2>It was not found {inputSeach}</h2>
                    </div>
                )}
            </div>
        </>
    );
}

export { Cities2 };
