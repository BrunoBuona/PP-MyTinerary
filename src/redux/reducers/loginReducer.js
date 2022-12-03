import { createReducer } from "@reduxjs/toolkit"
import loginAction from "../actions/loginForm"
const initialState = {
    id: "",
    name: "",
    photo: "",
    logged: false,
    token: "",
}

const loginReducer = createReducer(initialState, (login) => {
    login.addCase(loginAction.getToken.fulfilled, function (state, action) {
            return {token: action.payload}
        })
    //     login.addCase(loginAction.reLogin.fulfilled, function (state, action) {
    //         const {success, response} = action.payload
    //         if(success){
    //             let {user, tokenx} = response
    //             console.log(user)
    //             let newState = {
    //             email: user.email,
    //             password: user.password,
    //             id: user.id,
    //             name: user.name,
    //             photo: user.photo,
    //             logged: true,
    //             role: user.role,
    //             token: tokenx                    
    //         }
    //         return newState
    //     }else{
    //             let newState={
    //             mensaje: response
    //     }
    //     return newState
    // }    
    //     })
        
        login.addCase(loginAction.logOut.fulfilled, (state, action) => {
            const { success } = action.payload;
            if (success) {
              return { token: "" };
            }
        });
     })

export default loginReducer