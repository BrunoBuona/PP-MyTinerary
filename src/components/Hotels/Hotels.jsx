// React
import { useState, useEffect, React } from 'react';
import { Link } from "react-router-dom";
// Redux
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import hotelAction from "../../redux/actions/hotelAction";
// Components
import './Hotels.css'


export function HotelsPage() {
    const hotelList = useSelector(store => store.hotelReducer.hotelList)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [order, setOrder] = useState('asc')

    useEffect(() => {
        dispatch(hotelAction.getHotels())
        // eslint-disable-next-line
    }, [])
    useEffect(()=>{
        let filter = {
            name: search,
            order: order
        }
        dispatch(hotelAction.getHotelOrder(filter))
        // eslint-disable-next-line
    },[search,order])

    function DataFetching() {
        function getRandomImage(arr) {
            const length = arr.length;
            const randomIndex = Math.floor(length * Math.random())
            return arr[randomIndex]
        }
        return (
            hotelList.map((e) => {
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