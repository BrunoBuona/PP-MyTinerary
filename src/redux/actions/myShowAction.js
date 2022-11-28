import {  createAsyncThunk} from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";

const deleteShows = createAsyncThunk("deleteShows", async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/shows/${id}`,{ 
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
const myShowAction ={
    deleteShows
}

export default myShowAction;