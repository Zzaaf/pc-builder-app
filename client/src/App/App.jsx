import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "../features/Home/Home";
import Nav from "../features/Nav/Nav";
import Profile from "../features/Profile/Profile";
import CurrentProduct from "../features/CurrentProduct/CurrentProduct";
import { useState } from "react";
import Products from "../features/Products/Products";

function App() {
  const [products, setProduct] = useState([]);

  return (
    <BrowserRouter>
      <Nav/>

      <section className="container">
        <Routes>
          <Route path="/" element = {<Home products={products} setProduct={setProduct}/>} />
          <Route path="/profile" element = {<Profile/>} />
          <Route path="/products" element = {<Products/>} />
          <Route path="/products/:id" element = {<CurrentProduct products={products}/>} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
