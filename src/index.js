import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homes from './Homes';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homes />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/menu' element={<Menu />} />
        {/* Define more routes here if needed */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
