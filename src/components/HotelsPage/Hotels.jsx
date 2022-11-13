import React from "react";
import './Hotels.css'
import { hotels } from '../../data/hotels';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios'
import { BASE_URL } from '../../api/url'
// esto es el estado inicial de la app

// eslint-disable-next-line


let filtradosPorSearch = []
filtradosPorSearch = hotels.sort((a, b) => a.name.localeCompare(b.name))
export function HotelsPage(e) {
    function ascendentOrderer() {
        filtradosPorSearch.sort((a, b) => a.name.localeCompare(b.name))
        console.log(hotels)

    }
    function descendentOrderer() {
        filtradosPorSearch.sort((a, b) => b.name.localeCompare(a.name))
        console.log(hotels)
    }
    const [search, setSearch] = useState('')
    const [order, setOrder] = useState('ascendent')
    if (search !== '') {
        console.log(search)
    }
    if (order === 'ascendente') {
        ascendentOrderer()
    }
    else if (order === 'descendente') {
        descendentOrderer()
    }
    function DataFetching() {
        const [data, setData] = useState([])
        useEffect(() => {
            axios.get(`${BASE_URL}/api/hotels/read?name=${search}&order=${order}`)
                .then((response) => {
                    let resData = response.data.response
                    setData(resData)
                })
        },[])
        function getRandomImage(arr) {
    const length = arr.length;
    const randomIndex = Math.floor(length * Math.random())
    return arr[randomIndex]
  }
        return (
            data.map((e) => {
                return (
                    <div key={e.id + 1} className="hotel">
                        <img className="card-top-img" src={getRandomImage(e.photo)} alt="hotel" />
                        <h3>{e.name}</h3>
                        <Link key={e.id} to={`/detailshotels/${e.id}`}>See More</Link>
                    </div>
                )
            }
            )
        )}
    return (
            <>

                <div className="main-hotels">
                    <div className="filtros-hotels">

                        <div className="select-container">
                            <label className="searchText">¡Search by City!</label>
                            <select className="filter" type="select" onChange={e => {
                                let orderer = e.target.value
                                setOrder(orderer)
                            }} >
                                <option value="asc">Ascendente</option>
                                <option value="desc">Descendente</option>
                            </select>
                        </div>

                        <div className="search-container">
                            <label className="searchText">¡Search by Name!</label>
                            <input onChange={e => {
                                let search = e.target.value
                                setSearch(search)
                                filtradosPorSearch = hotels.filter(iteracion => iteracion.name.toLowerCase().includes(search.toLowerCase()))
                                console.log(filtradosPorSearch)
                            }} className="filter" type="search" />
                        </div>
                    </div>
                    <div className="hotels-container">
                        {<DataFetching />}
                    </div>
                </div>
            </>
        )
    }