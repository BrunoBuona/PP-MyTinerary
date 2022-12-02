import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";


const getCities = createAsyncThunk('getCities', async() => {
    try {
        const res = await axios.get(`${BASE_URL}/api/cities`)
        return {
            cities: res.data.response
        }
    } catch (err) {
        return {
            error: 'Error'
        }
    }
})

const getFilteredCities = createAsyncThunk('getFilteredCities', async(filter) => {
    try {
        let search = filter.name
        let check = filter.continent.join(',')
        const res = await axios.get(`${BASE_URL}/api/cities?name=${search}&continent=${check}`)
        return {
            cities: res.data.response
        }
    } catch (error) {
        return {
            error: 'Error'
        }
    }
})
const cityAction = {
    getCities,
    getFilteredCities
}

export default cityAction