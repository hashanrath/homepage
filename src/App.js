import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Log from './pages/Log';
import About from './pages/About';
import Abfooter from './component/Abfooter';
import Newtechnology from './pages/Newtechnology';
import Imgslider from './pages/Imgslider';
import Disease from './pages/Disease';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Userhome from './pages/Userhome';
import Newtechnologyfarmers from './pages/Newtechnologyfarmers';
import DropdownMenu from '../src/component/DropdownMenu';
import UserProfileEdit from './pages/UserProfileEdit';
import ForgotPassword from './pages/ForgotPassword';
import Chatt from './pages/Chatt';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Log/>}></Route>
      <Route path="/aboutus" element={<About/>}></Route>
      <Route path="/abf" element={<Abfooter/>}></Route>
      <Route path="/new" element={<Newtechnology/>}></Route>
      <Route path="/img" element={<Imgslider/>}></Route>
      <Route path="/di" element={<Disease/>}></Route>
      <Route path="/re" element={<Register/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/userH" element={<Userhome/>}></Route>
      <Route path="/nft" element={<Newtechnologyfarmers/>}></Route>
      <Route path="/drop" element={<DropdownMenu/>}></Route>
      <Route path="/useredit" element={<UserProfileEdit/>}></Route>
      <Route path="/fpass" element={<ForgotPassword/>}></Route>
      <Route path="/chat" element={<Chatt/>}></Route>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
