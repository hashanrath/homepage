import React from 'react';
import '../component/cufooter.css';
import fbimg22 from '../Images/fbfo.jpeg';
import twimg22 from '../Images/twifo.jpeg';
import youtube22 from '../Images/youtube.jpeg';
import navimg22 from '../Images/navilogo.jpeg';
import navimg23 from '../Images/navilogo.jpeg';
import navimg24 from '../Images/navilogo.jpeg';
import navimg25 from '../Images/navilogo.jpeg';
import logoimg22 from '../Images/Alogo.jpeg';

export default function Cufooter() {
  return (
    <div>
       <div className="rectangle22"/>
          <p className="footerlb22"> Copyright© 2024 AGRO Holding Limited</p>
          <p className="getlb22">Get Social</p>
          <img src={fbimg22} alt={fbimg22} width={20} height={20} className={'imgfb22'}/>
          <img src={twimg22} alt={twimg22} width={20} height={20} className={'imgtw22'}/>
          <img src={youtube22} alt={youtube22} width={20} height={20} className={'youtubeft22'}/>
          <p className="addft22">No 165,<br/>Peradeniya Road,<br/>Kandy</p>
          <p className="tPnu22">0768535551<br/>0812404964</p>
          <p className="email22">agroagri45@gmail.com</p>
          <p className="add22">Address:</p>
          <p className="tpn22">Telephone numbers:</p>
          <p className="emid22">Email Address:</p>
          <p className="navigation22">Navigation Bar</p>
          <img src={navimg22} alt={navimg22} width={20} height={20} className={'naviimg22'}/>
          <img src={navimg23} alt={navimg22} width={20} height={20} className={'naviimg23'}/>
          <img src={navimg24} alt={navimg22} width={20} height={20} className={'naviimg24'}/>
          <img src={navimg25} alt={navimg22} width={20} height={20} className={'naviimg25'}/>
          <p className="home22">Home</p>
          <p className="contact22">Contact Us</p> 
          <img src={logoimg22} alt={logoimg22} width={20} height={20} className={'logo22'}/>  
          <div className="logonc">Login</div>
          <div className="ablog">About Us</div>
    </div>
  );
}
