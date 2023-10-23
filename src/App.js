import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Inkcredible from "./Inkcredible";
import Unlocking from "./Unlocking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inkcredible" element={<Inkcredible />} />
        <Route path="/Unlocking" element={<Unlocking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
