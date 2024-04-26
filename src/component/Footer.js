import React from 'react';
import '../component/footer.css';
import fbimg from '../Images/fbfo.jpeg';
import twimg from '../Images/twifo.jpeg';
import youtube from '../Images/youtube.jpeg';
import navimg from '../Images/navilogo.jpeg';
import navimg1 from '../Images/navilogo.jpeg';
import navimg2 from '../Images/navilogo.jpeg';
import navimg3 from '../Images/navilogo.jpeg';
import logoimg from '../Images/Alogo.jpeg';


export default function Footer() {
  return (
    <div>
          <div className="rectangle10"/>
          <div className="footerlable1"/>
          <p className="footerlb10"> Copyright© 2024 AGRO Holding Limited</p>
          <div className="bxlable"/>
          <p className="getlb10">Get Social</p>
          <div className="fbimgft"/>
          <img src={fbimg} alt={fbimg} width={20} height={20} className={'imgfb10'}/>
          <div className="twimgft"/>
          <img src={twimg} alt={twimg} width={20} height={20} className={'imgtw10'}/>
          <div className="youtubeimg"/>
          <img src={youtube} alt={youtube} width={20} height={20} className={'youtubeft10'}/>
          <div className="address"/>
          <p className="addft10">No 165,<br/>Peradeniya Road,<br/>Kandy</p>
          <dic className="telenu"/>
          <p className="tPnu10">0768535551<br/>0812404964</p>
          <div className="emalad"/>
          <p className="email10">agroagri45@gmail.com</p>
          <div className="addhead"/>
          <p className="add10">Address:</p>
          <div className="telenu"/>
          <p className="tpn10">Telephone numbers:</p>
          <div className="email"/>
          <p className="emid10">Email Address:</p>
          <div className="navi"/>
          <p className="navigation10">Navigation Bar</p>
          <div className="naviimg"/>
          <img src={navimg} alt={navimg} width={20} height={20} className={'naviimg10'}/>
          <div className="naviimg2"/>
          <img src={navimg1} alt={navimg1} width={20} height={20} className={'naviimg30'}/>
          <div className="naviimg4"/>
          <img src={navimg2} alt={navimg2} width={20} height={20} className={'naviimg50'}/>
          <div className="naviimg6"/>
          <img src={navimg3} alt={navimg3} width={20} height={20} className={'naviimg70'}/>
          <div className="navihome"/>
          <p className="home10">Home</p>
          <div className="naviabout"/>
          <p className="aboutus10">About Us</p>
          <div className="navicontact"/>
          <p className="contact10">Contact Us</p>
          <div className="navilog"/>
          <p className="login10">Login</p>
          <div className="imglogo"/>
          <img src={logoimg} alt={logoimg} width={20} height={20} className={'logo10'}/>  
    </div>
  );
}
