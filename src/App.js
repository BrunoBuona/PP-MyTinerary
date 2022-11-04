import { Route, Routes } from "react-router-dom";
import NotFound from "./components/404/NotFound";

export default function App() {
  return (
      <>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        
      </Routes>
    </>
  );
}

export default App;

