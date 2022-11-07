import React from "react";
import './Hotels.css'
import { hotels } from '../../data/hotels';
import { HotelPrinter } from "./HotelPrinter.jsx";
import { useState } from 'react';
// esto es el estado inicial de la app
hotels.sort((a, b) => a.name.localeCompare(b.name))



function ascendentOrderer() {
     hotels.sort((a, b) => a.name.localeCompare(b.name))
     console.log(hotels)

}
function descendentOrderer() {
     hotels.sort((a, b) => b.name.localeCompare(a.name) )
     console.log(hotels)
}

export function HotelsPage(e) {
    const [search, setSearch] = useState('')
    const [order, setOrder] = useState('ascendent')
    if(search !== ''){
        console.log(search)
    }
    if(order === 'ascendente'){
         ascendentOrderer()
        }
    else if(order === 'descendente'){
        descendentOrderer()
    } 
    let filtradosPorSearch = []
    return (
        <>

            <div className="main-hotels">
                <div className="filtros-hotels">

                    <div className="select-container">
                        <label className="searchText">¡Search by City!</label>
                        <select className="filter" type="select" onChange={e => {
                            let orderer = e.target.value
                            setOrder(orderer)
                            console.log(filtradosPorSearch)
                        }} >
                            <option value="ascendente">Ascendente</option>
                            <option value="descendente">Descendente</option>
                        </select>
                    </div>

                    <div className="search-container">
                        <label className="searchText">¡Search by Name!</label>
                        <input onChange={e=>{
                            let search = e.target.value
                             setSearch(search)
                             filtradosPorSearch = hotels.filter(iteracion => iteracion.name.toLowerCase().includes(search.toLowerCase()))
                             console.log(filtradosPorSearch)
                        }} className="filter" type="search" />
                    </div>
                </div>
                <div className="hotels-container">
                    {<HotelPrinter />}
                </div>
            </div>
        </>
    )
}