import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Authentication from './pages/authentication/Authentication.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication/>} />
      </Routes>
    </Router>
  )
}

export default App
