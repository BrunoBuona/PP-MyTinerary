import { createReducer } from "@reduxjs/toolkit"
import hotelAction from "../actions/hotelAction"
const initialState = {
    hotelList: [],
    loading: false,
    error: false
}

const hotelReducer = createReducer(initialState, (hotel) => {
    hotel.addCase(hotelAction.getHotels.fulfilled, function (state, action) {
            return { ...state, loading: false, hotelList: action.payload.hotelList }
        }) 
        hotel.addCase(hotelAction.getHotelName.fulfilled, function (state, action) {
            return { ...state, loading: false, hotelList: action.payload.hotelList }
        }) 
        hotel.addCase(hotelAction.getHotelOrder.fulfilled,(state,action)=>{
            return {...state, hotelList: action.payload.hotelList}
        })
})



export default hotelReducer
