import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import AboutUs from "./pages/aboutUs/AboutUs";

function App(){
  return (
      <Router>
        <Box>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
              <Route path="/AboutUs" element={<AboutUs/>}/>
          </Routes>
        </Box>
      </Router>
  );
}

export default App;

