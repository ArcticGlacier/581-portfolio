import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Inkcredible from "./Inkcredible";
import Unlocking from "./Unlocking";
import CelledPhone from "./CelledPhone";
import FlashFriends from "./Flashfriends";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inkcredible" element={<Inkcredible />} />
        <Route path="/Unlocking" element={<Unlocking />} />
        <Route path="/CelledPhone" element={<CelledPhone />} />
        <Route path="/FlashFriends" element={<FlashFriends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
