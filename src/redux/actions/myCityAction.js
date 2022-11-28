import {  createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const deleteCities = createAsyncThunk("deleteCities", async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/cities/${id}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return {
        success: true,
      };
    } catch (error) {
      return {
        error: true,
      };
    }
  });
const myHotelAction ={
    deleteCities
}

export default myHotelAction;