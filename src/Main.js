// Main.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Homepage
import EmployeeDetail from './components/EmployeeDetails'; // Employee Detail Page

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/employee/:psNumber" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
}

export default Main;
