import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Errorpage from './components/Errorpage';
import Createacc from './components/Createacc';
import Nav from "./components/Nav";
import Login from './components/Login';
import Datalist from './components/Datalist';
import Axiosapishow from './components/Axiosapishow';
import MyBootForm from './components/MyBootForm';
import ViewChart from './components/ViewChart';
import Api from './components/Api';
const Albel = React.lazy(()=> import('./components/Datalist'));
const Lzypg = React.lazy(()=> import('./components/LazzyPage'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='' element = { <Home/>}/>
      <Route path='*' element = { <Errorpage/> } />
      <Route path='CreateNewAccount' element = {<Createacc/>} />
      <Route path='login' element = {<Login/>} />
      <Route path='datalist' element = {<Datalist/>}/>
      <Route path='/:category/:id' element = {<Axiosapishow/>}/>
      <Route path='fillform' element = {<MyBootForm/>}/>
      <Route path='viewchart' element = {<ViewChart/>}/>
      <Route path='/:category' element = {<Api/>}/>
      <Route path='lazzypg' element = {
      <Suspense fallback={<div>load..</div>}>
        <Lzypg/>
        <Albel/>,
        </Suspense>}/>





    </Routes>
    </BrowserRouter>
   
    
  </React.StrictMode>
);


