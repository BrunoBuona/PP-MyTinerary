import { createReducer } from "@reduxjs/toolkit";
import myItineraryAction from "../actions/myItineraryAction";

const initialState = {}

const myItineraryReducer = createReducer(initialState, (myItinerary)=>{
    myItinerary.addCase(myItineraryAction.deleteItinerary.fulfilled, (state, action)=>{
        return {...state}
    })
} )

export default myItineraryReducer; 