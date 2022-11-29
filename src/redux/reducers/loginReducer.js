import { createReducer } from "@reduxjs/toolkit"
import loginAction from "../actions/loginForm"
const initialState = {
    token: "",
}

const loginReducer = createReducer(initialState, (login) => {
    login.addCase(loginAction.getToken.fulfilled, function (state, action) {
            return {token: action.payload}
        })
        
        login.addCase(loginAction.logOut.fulfilled, (state, action) => {
            const { success } = action.payload;
            if (success) {
              return { token: "" };
            }
        });
     })

export default loginReducer