import { Route, Routes } from "react-router-dom";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {NotFound} from "./components/404/NotFound.jsx";
import {Main} from "./layouts/Main"
import {Home} from "./pages/Home"
import {SignUp} from "./pages/signUp/SignUp"
import {NewHotels} from "./components/NewHotel/NewHotel.jsx"

function App() {
  return (
    <>
    <Main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignIn" element={<LoginForm/>}/>
        <Route path="*" element={<NotFound/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/NewHotel" element={<NewHotels/>} />
      </Routes>
    </Main>
    </>
  );
}

export default App;