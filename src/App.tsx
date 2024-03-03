import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import AboutUs from "./pages/aboutUs/AboutUs";
import Products from "./pages/products/products"

function App(){
  return (
      <Router>
        <Box>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
              <Route path="/AboutUs" element={<AboutUs/>}/>
              <Route path="/NostriProdotti" element={<Products/>}/>
          </Routes>
        </Box>
      </Router>
  );
}

export default App;

