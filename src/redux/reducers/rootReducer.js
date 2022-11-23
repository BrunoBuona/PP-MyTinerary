import hotelReducer from "./hotelReducer"
import cityReducer from "./cityReducer"
import CityFilterReducer from "./cityFilterReducer"
import myHotelsReducer from "./myHotelReducer"
import myShowReducer from "./myHotelReducer"
import myCityReducer from "./myCityReducer"
import myItineraryReducer from "./myItineraryReducer"

const rootReducer = {
    hotelReducer,
    myHotelsReducer,
    myShowReducer,
    cityReducer,
    CityFilterReducer,
    myCityReducer,
    myItineraryReducer
}

export default rootReducer;