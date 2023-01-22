import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Query from './Components/Query';

function App() {
  return (
    <Routes>
    <Route path="/query" element={<Query />} />
    </Routes>
  );
}

export default App;
