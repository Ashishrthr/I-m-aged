import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Errorpage from './components/Errorpage';
import Createacc from './components/Createacc';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='' element = { <Home/>}/>
      <Route path='*' element = { <Errorpage/> } />
      <Route path='CreateAccount' element = {<Createacc/>} />
      <Route path='login' element = {<Login/>} /> 
    </Routes>
    </BrowserRouter>
   
    
  </React.StrictMode>
);


