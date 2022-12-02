import hotelReducer from "./hotelReducer"
import cityReducer from "./cityReducer"
import CityFilterReducer from "./cityFilterReducer"
import myHotelsReducer from "./myHotelReducer"
import myShowReducer from "./myHotelReducer"
import myCityReducer from "./myCityReducer"
import myItineraryReducer from "./myItineraryReducer"
import loginReducer from "./loginReducer"
import tokenReducer from "./tokenReducer"
// import commentReducer from "./commentReducer"

const rootReducer = {
    hotelReducer,
    myHotelsReducer,
    myShowReducer,
    cityReducer,
    CityFilterReducer,
    myCityReducer,
    myItineraryReducer,
    loginReducer,
    tokenReducer,
    // commentReducer
}

export default rootReducer;