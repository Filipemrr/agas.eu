import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
      <Router>
        <Box>
          <Routes>
            <Route path="/home" element={<Home/>} />
          </Routes>
        </Box>
      </Router>
  );
}

export default App;