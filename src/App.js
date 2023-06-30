import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Location from './components/pages/Location';
import Contact from './components/pages/Contact';
import ProductosTermotanques from './components/pages/products/ProductosTermotanques';
import Nosotros from './components/pages/Nosotros';
import ProductosBombasDeCalor from './components/pages/products/ProductosBombasDeCalor';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/location' element={<Location />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/termotanques' element={<ProductosTermotanques />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/bombas-de-calor' element={<ProductosBombasDeCalor />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
