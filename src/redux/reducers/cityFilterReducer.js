import {createReducer} from '@reduxjs/toolkit'
import cityFilterAction from '../actions/cityFilterActions'

const {setChecked, setSearched} = cityFilterAction
const initialState = {
        continent: [],
        name: ''
}

const CityFilterReducer = createReducer(initialState, builder => {
        builder.addCase(setChecked, (state, action) => {
            return { ...state,...action.payload}
        })
        builder.addCase(setSearched, (state, action) => {
            return {...state, ...action.payload}
        })
})

export default CityFilterReducer