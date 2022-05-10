import React from 'react';
import Home from './views/home/home';
import Forum from './views/forum/forum';
import Navbar from './components/navbar/Navbar';
import Login from './views/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Forum" element={<Forum/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
