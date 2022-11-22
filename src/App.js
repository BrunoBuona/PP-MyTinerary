import { Route, Routes } from "react-router-dom";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {NotFound} from "./components/404/NotFound.jsx";
import {Main} from "./layouts/Main"
import {Home} from "./pages/HomePage/Home"
import {SignUp} from "./pages/signUp/SignUp"
import {NewHotels} from "./components/NewHotel/NewHotel.jsx"
import { NewCity } from "./pages/NewCity/NewCity"
import { HotelsPage } from "./components/Hotels/Hotels";
import {DetailsH} from "./components/DetailsHotel/DetailsHotels"
import {Cities3} from "./pages/Cities/Cities"
import DetailsC from "./pages/DetailsCities/DitailsCities"
import MyHotels from "./pages/myHotels/myHotels";
import MyCity from "./pages/myCity/MyCity"

function App() {
  return (
    <>
    <Main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Hotels" element={<HotelsPage/>}/>
        <Route path="/SignIn" element={<LoginForm/>}/>
        <Route path="*" element={<NotFound/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/NewHotel" element={<NewHotels/>} />
        <Route path="/NewCity" element={<NewCity/>} />
        <Route path="/detailshotels/:id" element={<DetailsH/>}/>
        <Route path="/cities" element={<Cities3/>}/>
        <Route path="/detailscities/:id" element={<DetailsC/>}/>
        <Route path="/myhotels" element={<MyHotels/>}/>
        <Route path="/myCities" element={<MyCity/>}/>
      </Routes>
    </Main>
    </>
  );
}

export default App;