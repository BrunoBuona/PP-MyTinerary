// Importamos los items de REDUX
import { createAsyncThunk} from "@reduxjs/toolkit";
// Importamos AXIOS para vincular FRONT y BACK
import axios from "axios";
// Llamamos a una URL estandarizada en API para acoplarnos al DRY
import {BASE_URL} from "../../api/url";

let getHotels = createAsyncThunk('getHotels', async()=>{
    const respuesta = await axios.get(`${BASE_URL}/api/hotels/`)
    return {
        hotelList: respuesta.data.response
    }
})
let getHotelName = createAsyncThunk('getHotelName', async(name)=>{
    const respuesta = await axios.get(`${BASE_URL}/api/hotels/?name=${name}`)
    return {
        hotelList: respuesta.data.response
    }
})
let getHotelOrder = createAsyncThunk('getHotelByFilter',async(filter)=>{
    const respuesta = await axios.get(`${BASE_URL}/api/hotels/?name=${filter.name}&order=${filter.order}`)
    return{
        hotelList: respuesta.data.response
    }
})

const hotelAction = {
    getHotels,
    getHotelName,
    getHotelOrder
}

export default hotelAction

