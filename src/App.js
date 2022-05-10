import React from 'react';
import Accueil from './views/home/Accueil';
import Forum from './views/forum/forum';
import Navbar from './components/navbar/Navbar';
import Login from './views/login/Login';
import Register from './views/register/Register';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/Forum" element={<Forum/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
