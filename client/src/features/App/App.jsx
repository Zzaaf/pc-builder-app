import { BrowserRouter, Routes, Route  } from "react-router-dom";
import './App.css'
import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Nav/>

      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/profile" element = {<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
