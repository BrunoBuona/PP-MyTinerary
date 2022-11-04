import { Route, Routes } from "react-router-dom";
import {LoginForm} from "./components/LoginForm/LoginForm";

export default function App() {
  return (
      <>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </>
  );
}

