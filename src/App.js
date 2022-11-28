import { Route, Routes } from "react-router-dom";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {NotFound} from "./components/404/NotFound.jsx";
import {Main} from "./layouts/Main"
import {Home} from "./pages/HomePage/Home";
import {SignUp} from "./pages/signUp/SignUp";
import {NewHotels} from "./components/NewHotel/NewHotel.jsx";
import { NewCity } from "./pages/NewCity/NewCity";
import { HotelsPage } from "./components/Hotels/Hotels";
import {DetailsH} from "./components/DetailsHotel/DetailsHotels";
import {Cities3} from "./pages/Cities/Cities";
import DetailsC from "./pages/DetailsCities/DitailsCities";
import MyHotels from "./pages/myHotels/myHotels";
import MyCity from "./pages/myCity/MyCity";
import MyShows from "./pages/myShows/myShows";
import MyItineraries from "./pages/myItineraries/myItineraries";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
import ViewProfile1 from "./components/Profile/ViewProfile1.jsx";
import ViewProfile2 from "./components/Profile/ViewProfile2.jsx";
import NewShows from "./components/NewShow/NewShow";
import NewItineraries from "./pages/NewItineraries/NewItineraries"




function App() {
  let user = useSelector((store) => store.loginReducer)
  let logged = user.token
  let role = user.token
  let admin = role.role === "admin"
  console.log(admin)


  return (
    <>
    <Main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Hotels" element={<HotelsPage/>}/>
        <Route path="/SignIn" element={<LoginForm/>}/>
        <Route path="*" element={<NotFound/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/detailshotels/:id" element={<DetailsH/>}/>
        <Route path="/cities" element={<Cities3/>}/>
        <Route path="/detailscities/:id" element={<DetailsC/>}/>
        <Route element={<ProtectedRoute isAllowed={!!admin} reDirect='/'/>}>
          <Route path="/myhotels" element={<MyHotels/>}/>
          <Route path="/myCities" element={<MyCity/>}/>
          <Route path="/NewHotel" element={<NewHotels/>} />
          <Route path="/NewCity" element={<NewCity/>} />
          <Route path="/myshows/newshow" element={<NewShows/>} />
          <Route path="/myitineraries/newitineraries" element={<NewItineraries/>} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!logged} reDirect='/SignIn'/>}>
          <Route path="/myshows" element={<MyShows/>}/>
          <Route path="/myitineraries" element={<MyItineraries/>}/>
          <Route path="/profile" element={<ViewProfile1/>}/>
          <Route path="/profile/edit" element={<ViewProfile2/>}/>
        </Route>
      </Routes>
    </Main>
    </>
  );
}

export default App;