import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Errorpage from './components/Errorpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='' element = { <Home/>}/>
      <Route path='*' element = { <Errorpage/> } />
    </Routes>
    </BrowserRouter>
   
    
  </React.StrictMode>
);


