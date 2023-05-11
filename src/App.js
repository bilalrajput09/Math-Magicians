import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Quote from './Components/Quote';

function App() {
  const space = '';
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      <footer className="footer">
        &copy; Designed by
        {` ${space} `}
        <a href="https://github.com/bilalrajput09">Bilal Ahmed</a>
      </footer>
    </>
  );
}

export default App;
