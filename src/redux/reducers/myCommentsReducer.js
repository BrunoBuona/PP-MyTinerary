import { createReducer } from "@reduxjs/toolkit";
import commentsActions from "../actions/commentsActions";

const {reload } = commentsActions;

const initialState = {
  comments: [],
};

const commentReducer = createReducer(initialState, (builder) => {
  builder.addCase(reload.fulfilled, (state, action) => {
    return action.payload
  })
  // builder
  //   .addCase(getComment.fulfilled, (state, action) => {
  //     return { ...state, comments: action.payload.comments };
  //   }) 

  //   .addCase(createComment.fulfilled, (state, action) => {
  //     return {
  //       ...state,
  //       comments: action.payload.comments,
  //     };
  //   })
  //   .addCase(deleteComment.fulfilled, (state, action) => {
  //     let deleteComment = state.comments.filter(
  //       (deleteComment) => deleteComment._id !== action.payload.data._id
  //     );
  //     return {
  //       ...state,
  //       comments: deleteComment,
  //     };
  //   })
  //   .addCase(editComment.fulfilled, (state, action) => {
  //    let newComments = state.comments.map((e) => {
  //       if(e._id === action.payload.id){
  //         return {
  //           ...e,
  //           comment: action.payload.comment,
  //         }
  //       }else{
  //         return e
  //       }
  //     })
  //     return {
  //       ...state,
  //       comments: newComments,
       
    //   };
    // });
});

export default commentReducer;