import React from "react";
import './Hotels.css'
import { hotels } from '../../data/hotels';
import { HotelPrinter } from "./HotelPrinter.jsx";
import { useState } from 'react';
// esto es el estado inicial de la app




let filtradosPorSearch = []
filtradosPorSearch=hotels.sort((a, b) => a.name.localeCompare(b.name))
export function HotelsPage(e) {
    function ascendentOrderer() {
         filtradosPorSearch.sort((a, b) => a.name.localeCompare(b.name))
         console.log(hotels)
    
    }
    function descendentOrderer() {
         filtradosPorSearch.sort((a, b) => b.name.localeCompare(a.name) )
         console.log(hotels)
    }
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