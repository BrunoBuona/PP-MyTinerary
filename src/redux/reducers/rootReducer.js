import hotelReducer from "./hotelReducer"
import cityReducer from "./cityReducer"
import CityFilterReducer from "./cityFilterReducer"
import myHotelsReducer from "./myHotelReducer"

const rootReducer = {
    hotelReducer,
    myHotelsReducer,
    cityReducer,
    CityFilterReducer
}

export default rootReducer;