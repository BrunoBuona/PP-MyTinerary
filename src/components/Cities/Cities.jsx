import React from "react";
import "./Cities.css";
import { CitiesPrinter } from "./CitiesPrinter";
import {cities} from "../../data/cities"
import {Checkbox} from "../checkbox/Checkbox"

function Cities2() {
    function filtrar(e){
        let search = e.target.value
        let filtrarSearch = cities.filter(evento => evento.name.toLowerCase().includes(search.toLowerCase()))
        console.log(filtrarSearch);
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
                        <label className="searchText">¡Search by Name!</label>
                        <input 
                        className="filter"
                        type="search"
                        onChange={ e => filtrar (e) }
                        />
                    </div>
                </div>
                <div className="cities-container">
                    <CitiesPrinter />
                </div>
            </div>
        </>
    );
}

export { Cities2 };
