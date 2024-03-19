import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import AboutUs from "./pages/aboutUs/AboutUs";
import Products from "./pages/products/products"
import Contatti from "./pages/contact/contact"
import { register } from 'swiper/element/bundle';
register();
function App(){
  return (
      <Router>
        <Box>
          <Routes>
            <Route path="/" element={<Home/>}/>
              <Route path="/chiSiamo" element={<AboutUs/>}/>
              <Route path="/NostriProdotti" element={<Products/>}/>
              <Route path="/Contatti" element={<Contatti/>}/>
          </Routes>
        </Box>
      </Router>
  );
}

export default App;

