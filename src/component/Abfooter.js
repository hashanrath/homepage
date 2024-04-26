import React from 'react';
import '../component/aboutfooter.css';
import fbimg from '../Images/fbfo.jpeg';
import twimg from '../Images/twifo.jpeg';
import youtube from '../Images/youtube.jpeg';
import navimg from '../Images/navilogo.jpeg';
import navimg1 from '../Images/navilogo.jpeg';
import navimg2 from '../Images/navilogo.jpeg';
import navimg3 from '../Images/navilogo.jpeg';
import logoimg from '../Images/Alogo.jpeg';

export default function Abfooter() {
  return (
    <div>
       <div className="box1"/>
          <div className="rectangle1"/>
          <div className="footerlable"/>
          <p className="footerlb"> Copyright© 2024 AGRO Holding Limited</p>
          <div className="bxlable"/>
          <p className="getlb">Get Social</p>
          <div className="fbimgft"/>
          <img src={fbimg} alt={fbimg} width={20} height={20} className={'imgfb'}/>
          <div className="twimgft"/>
          <img src={twimg} alt={twimg} width={20} height={20} className={'imgtw'}/>
          <div className="youtubeimg"/>
          <img src={youtube} alt={youtube} width={20} height={20} className={'youtubeft'}/>
          <div className="address"/>
          <p className="addft">No 165,<br/>Peradeniya Road,<br/>Kandy</p>
          <dic className="telenu"/>
          <p className="tPnu">0768535551<br/>0812404964</p>
          <div className="emalad"/>
          <p className="email">agroagri45@gmail.com</p>
          <div className="addhead"/>
          <p className="add">Address:</p>
          <div className="telenu"/>
          <p className="tpn">Telephone numbers:</p>
          <div className="email"/>
          <p className="emid">Email Address:</p>
          <div className="navi"/>
          <p className="navigation">Navigation Bar</p>
          <div className="naviimg"/>
          <img src={navimg} alt={navimg} width={20} height={20} className={'naviimg1'}/>
          <div className="naviimg2"/>
          <img src={navimg1} alt={navimg1} width={20} height={20} className={'naviimg3'}/>
          <div className="naviimg4"/>
          <img src={navimg2} alt={navimg2} width={20} height={20} className={'naviimg5'}/>
          <div className="naviimg6"/>
          <img src={navimg3} alt={navimg3} width={20} height={20} className={'naviimg7'}/>
          <div className="navihome"/>
          <p className="home">Home</p>
          <div className="naviabout"/>
          <p className="aboutus">About Us</p>
          <div className="navicontact"/>
          <p className="contact">Contact Us</p>
          <div className="navilog"/>
          <p className="login">Login</p>
          <div className="imglogo"/>
          <img src={logoimg} alt={logoimg} width={20} height={20} className={'logo'}/>  
    </div>
  );
}
