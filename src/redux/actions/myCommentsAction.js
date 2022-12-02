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
    
  })
  const getCommentsByShow = createAsyncThunk('getCommentsByShow', async(prop)=>{
    const res = await axios.get(`${BASE_URL}/api/comment?showId=${prop}`)
    return{commentList: res.data.response}
  })
  
const myCommentsAction ={
    deleteComment,
    getCommentsByShow
}

export default myCommentsAction;