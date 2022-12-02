import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionActions";
const { getReactions, updateReaction } = reactionActions;

const initialState = {};

const reactionReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(getReactions.fulfilled, (state, action) => {
                if (action.payload.success) {
                    return action.payload.response;
                }
            })
            .addCase(updateReaction.fulfilled, (state, action) => {

                if(action.payload.success) {
                  let {id, itineraryId} = action.payload;
          
                  let newReactions = state[itineraryId].map(reaction => {
                    if(reaction._id === id) {
                      return {...reaction, reacted: !reaction.reacted, userId: reaction.reacted ? reaction.userId - 1 : reaction.userId + 1}
                    } else {
                      return reaction;
                    }
                  });
                  let newState = {...state};
                  newState[itineraryId] = newReactions;
                  return newState;
                } else {
                  console.log(action.payload.message);
                }
              });
          });

export default reactionReducer;