import { Route, Routes } from "react-router-dom";
import NotFound from "./components/404/NotFound";
import {LoginForm} from "./components/LoginForm/LoginForm";

export default function App() {
  return (
      <>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </>
  );
}

