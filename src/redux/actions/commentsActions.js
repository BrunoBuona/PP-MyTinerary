import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const createComment = createAsyncThunk("createComment", async (datos,token) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/comments`, datos, { headers: { Authorization: `Bearer ${token}` } });
    return {
      success: true,
      comments: res.response.data
    };
  } catch (error) {
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});
const getComment = createAsyncThunk("getComment", async ({ id }) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/comments?showId=${id}`);
    return {
      comments: res.data.response,
    };
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const deleteComment = createAsyncThunk("deleteComment", async ({ idComment, token }) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/comments/${idComment}`, { headers: { Authorization: `Bearer ${token}` } });
      return {
        shows: res.data,
        data: res.data.res,
      };
    } catch (error) {
      if (error.response) {
        throw error.response.data.message.join("\n");
      } else {
        throw error;
      }
    }
  }
);
const editComment = createAsyncThunk("editComment", async (data) => {
  let headers = { headers: { Authorization: `Bearer ${data.token}` } };
  let url = `${BASE_URL}/api/comments/${data.id}`;
  try {
    let res = await axios.put(url, data.edit, headers)
    return {
      success: true,
      id: res.data.id,
      comment: data.edit.comment
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      response: "ocurrió un error",
    };
  }
})
const commentsActions = {
  createComment,
  deleteComment,
  editComment,
  getComment,
};
export default commentsActions;