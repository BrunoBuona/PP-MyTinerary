import {createReducer} from '@reduxjs/toolkit'
import myCommentsActions  from '../actions/myCommentsAction'

const initialState = {
  commentList: []
}
const commentReducer = createReducer(initialState, (login) => {
login.addCase(myCommentsActions.deleteComment.fulfilled, (state, action) => {
    const res = action.payload.commentList;
    return {res}
})})
export default commentReducer