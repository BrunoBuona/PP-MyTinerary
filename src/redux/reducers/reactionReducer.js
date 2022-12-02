import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionActions";
const { getReactions } = reactionActions;

const initialState = {};

const reactionReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(getReactions.fulfilled, (state, action) => {
                if (action.payload.success) {
                    return action.payload.response;
                }
            })
          });

export default reactionReducer;