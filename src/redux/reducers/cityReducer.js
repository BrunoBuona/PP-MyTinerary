import { createReducer } from "@reduxjs/toolkit";
import cityAction from "../actions/cityAction";


const {getCities, getFilteredCities } = cityAction


const inicialState = {
    cities:[],
    loading: false,
    error: false
}


const cityReducer = createReducer(inicialState, (builder)=> {
    builder.addCase(getCities.fulfilled, (state, action) => {
        return {...state, load: false, error: false, cities: action.payload.cities}
    })
    builder.addCase(getFilteredCities.fulfilled, (state, action) => {
        return {...state, load: false, error: false, cities: action.payload.cities}
    })
})

export default cityReducer;