import { Route, Routes } from "react-router-dom";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {NotFound} from "./components/404/NotFound.jsx";
import {Main} from "./layouts/Main.jsx"
import {Home} from "./pages/Home"
import {SignUp} from "./pages/signUp/SignUp"

function App() {
  return (
    <>
    <Main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="*" element={<NotFound/>} />
        <Route path="/sigup" element={<SignUp/>} />
      </Routes>
    </Main>
    </>
  );
}

export default App;