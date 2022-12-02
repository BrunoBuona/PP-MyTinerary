import {  createAsyncThunk} from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";
import { useSelector } from "react-redux";
const deleteComment = createAsyncThunk("deleteShows", async (id) => {
    try {
      const token = useSelector((state) => state.tokenReducer.tokenKey);
      await axios.delete(`${BASE_URL}/api/comment/${id}`,{ 
        headers: {
          Authorization: `Bearer ${token}`
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
const myCommentsAction ={
    deleteComment
}

export default myCommentsAction;