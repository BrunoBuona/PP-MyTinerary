import { Route, Routes } from "react-router-dom";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {NotFound} from "./components/404/NotFound.jsx";
import {Home} from "./layouts/Home"
import {Hoome} from "./pages/Hoome"

function App() {
  return (
    <>
    <Home>
      <Routes>
        <Route path="/" element={<Hoome/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Home>
    </>
  );
}

export default App;