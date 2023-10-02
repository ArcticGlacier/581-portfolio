import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Inkcredible from "./Inkcredible";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inkcredible" element={<Inkcredible />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
