import hotelReducer from "./hotelReducer"
import cityReducer from "./cityReducer"
import CityFilterReducer from "./cityFilterReducer"
import myHotelsReducer from "./myHotelReducer"
import myCityReducer from "./myCityReducer"

const rootReducer = {
    hotelReducer,
    myHotelsReducer,
    cityReducer,
    CityFilterReducer,
    myCityReducer
}

export default rootReducer;