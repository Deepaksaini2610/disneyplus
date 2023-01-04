import './App.css';
import { BrowserRouter,  Route, Routes } from "react-router-dom";  



import React from 'react'

import Login from './Login';
import Rough from './Rough';

export default function App() {
  return (
    <div className="Header">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="rough" element={<Rough/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

