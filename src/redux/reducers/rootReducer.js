import hotelReducer from "./hotelReducer"
import cityReducer from "./cityReducer"
import CityFilterReducer from "./cityFilterReducer"
import myHotelsReducer from "./myHotelReducer"
import myShowReducer from "./myHotelReducer"

const rootReducer = {
    hotelReducer,
    myHotelsReducer,
    myShowReducer,
    cityReducer,
    CityFilterReducer
}

export default rootReducer;