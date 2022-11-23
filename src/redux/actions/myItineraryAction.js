import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";

const deleteItinerary = createAsyncThunk("deleteItinerary", async (id) => {
    let url = `${BASE_URL}/api/itineraries/${id}`;
    try {
        await axios.delete(url);
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
