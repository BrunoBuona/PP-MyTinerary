import {createAction} from '@reduxjs/toolkit'

const setChecked = createAction('getChecked', (check) => {
    return {
        payload:{
            continent: check
        }
    }
})
const setSearched = createAction('getSearched', (search) => {
    return {
        payload:{
            name: search
        }
    }
})

const cityFilterAction = {
    setChecked,
    setSearched
}
export default cityFilterAction