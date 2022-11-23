import { createReducer } from "@reduxjs/toolkit";
import myCityAction from "../actions/myCityAction"

const initialState = {}

const myCityReducer = createReducer(initialState, (myCity)=>{
    myCity.addCase(myCityAction.deleteCities.fulfilled, (state, action)=>{
        return {...state}
    })
} )

export default myCityReducer; 