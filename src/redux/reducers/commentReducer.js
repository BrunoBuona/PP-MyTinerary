import {createReducer} from '@reduxjs/toolkit'
import commentsActions  from '../actions/myCommentsAction'

const initialState = {
  commentList: []
}
const commentReducer = createReducer(initialState, (login) => {
login.addCase(commentsActions.getCommentsByShow.fulfilled, (state, action) => {
    const res = action.payload.commentList;
    return {res}
})})
export default commentReducer