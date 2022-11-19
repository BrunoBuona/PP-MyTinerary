import React from "react";
import './Hotels.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios'
import { BASE_URL } from '../../api/url'

export function HotelsPage() {

    const [search, setSearch] = useState('')
    const [order, setOrder] = useState('asc')
    function DataFetching() {
        useEffect(() => {
            axios.get(`${BASE_URL}/api/hotels/?name=${search}&order=${order}`)
            .then((response) => {
                let resData = response.data.response
                setData(resData)
            })
        }, [])
        const [data, setData] = useState([])
        function getRandomImage(arr) {
            const length = arr.length;
            const randomIndex = Math.floor(length * Math.random())
            return arr[randomIndex]
        }
        return (
            data.map((e) => {
                return (
                    <div className="hotel">
                        <img key={e.id} className="card-top-img" src={getRandomImage(e.photo)} alt="hotel" />
                        <h3 key={e.id}>{e.name}</h3>
                        <Link key={e.id} to={`/detailshotels/${e._id}`}>See More</Link>
                    </div>
                )
            }
            )
        )
    }
    return (
        <>
            <div className="main-hotels">
                <div className="filtros-hotels">
                    <div className="select-container">
                        <label className="searchText">Sort by</label>
                        <select className="filter" type="select" onChange={e => {
                            let orderer = e.target.value
                            setOrder(orderer)
                        }} >
                            <option value="asc">Ascendent</option>
                            <option value="desc">Descendent</option>
                        </select>
                    </div>

                    <div className="search-container">
                        <label className="searchText">Search by Name</label>
                        <input onChange={e => {
                            let search = e.target.value
                            setSearch(search)
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