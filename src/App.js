import { Route, Routes } from "react-router-dom";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {NotFound} from "./components/404/NotFound.jsx";
import {Main} from "./layouts/Main"
import {Home} from "./pages/Home"
import {SignUp} from "./pages/signUp/SignUp"
import {NewHotels} from "./components/NewHotel/NewHotel.jsx"
import { NewCity } from "./components/NewCity/NewCity"
import { HotelsPage } from "./components/HotelsPage/Hotels";
import {DetailsH} from "./components/DetailsHotel/DetailsHotels"
import {Cities2} from "./components/Cities/Cities"
import DetailsC from "./components/DetailsCities/DitailsCities"

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
        <Route path="/detailshotels/:eId" element={<DetailsH/>}/>
        <Route path="/cities" element={<Cities2/>}/>
        <Route path="/detailscities/:eId" element={<DetailsC/>}/>
      </Routes>
    </Main>
    </>
  );
}

export default App;