import { createReducer } from "@reduxjs/toolkit"
import loginAction from "../actions/loginForm"
const initialState = {
    token: "",
}

const loginReducer = createReducer(initialState, (login) => {
    login.addCase(loginAction.getToken.fulfilled, function (state, action) {
        console.log(action.payload)
            return {token: action.payload}
        }) })

export default loginReducer