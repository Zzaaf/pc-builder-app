import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../features/Home/Home';
import Nav from '../features/Nav/Nav';
import Profile from '../features/Profile/Profile';
import CurrentProduct from '../features/CurrentProduct/CurrentProduct';
import Products from '../features/Products/Products';

function App() {
  const [products, setProduct] = useState([]);

  return (
    <section className="container">
      <BrowserRouter>
        <Nav />

        <section className="container">
          <Routes>
            <Route path="/" element={<Home setProduct={setProduct} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products products={products} setProduct={setProduct} />} />
            <Route path="/products/:id" element={<CurrentProduct products={products} />} />
          </Routes>
        </section>
      </BrowserRouter>
    </section>
  );
}

export default App;
