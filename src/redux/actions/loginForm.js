import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../api/url";

let getToken= createAsyncThunk('getToken', async(tokenx)=>{
    try{
    let headers = {headers:{'Authorization': `Bearer ${tokenx}`}}
    let token = await axios.post(`${BASE_URL}/api/auth/token`, {}, headers)
    let res = token.data.response.user
    return(res)
    }catch(err){
        console.log(err)
    }
})

const loginAction = {
   getToken
}

export default loginAction