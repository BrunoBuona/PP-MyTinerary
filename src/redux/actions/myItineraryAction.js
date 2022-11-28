import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";

const deleteItinerary = createAsyncThunk("deleteItinerary", async (id) => {
    try {
        await axios.delete(`${BASE_URL}/api/itineraries/${id}`, { 
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        return {
            success: true,
        };
    } catch (error) {
        return {
            error: true,
        };
    }
});
const myItineraryAction = {
    deleteItinerary,
};

export default myItineraryAction;
