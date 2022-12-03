import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getCommentShow = createAsyncThunk("getComment", async (id) => {
  const res = await axios.get(`${BASE_URL}/api/comment?showId=${id}`);
  return res.data
});

const getCommentItinerary = createAsyncThunk("getComment", async (id) => {
  const res = await axios.get(`${BASE_URL}/api/comment?itineraryId=${id}`);
  return res.data
});

const createComment = createAsyncThunk("createComment", async ({token, data}) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/comment`, data, { headers: { Authorization: `Bearer ${token}` } });
    return res
  } catch (error) {
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});

const deleteComment = createAsyncThunk("deleteComment", async ({token, id }) => {
  try {
      const res = await axios.delete(`${BASE_URL}/api/comment/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      return {
        success: true
      }
    }catch(error) {
      if (error.response) {
        throw error.response.data.message.join("\n");
      } else {
        throw error;
      }
    }
  }
);

const editComment = createAsyncThunk("editComment", async ({token, id, newUpdate}) => {
  try {
    let res = await axios.put(`${BASE_URL}/api/comment/${id}`, newUpdate, { headers: { Authorization: `Bearer ${token}` } })
    return console.log(res)
  }catch(error) {
    return {
      success: false,
      response: "ocurrió un error",
    };
  }
})

const commentsActions = {
  getCommentShow,
  getCommentItinerary,
  createComment,
  deleteComment,
  editComment,
};

export default commentsActions;