import React from 'react';
import '../component/navi.css';
import Logo from '../Images/Alogo.jpeg';
import Logo1 from '../Images/FbLogo.jpg';
import Logo2 from '../Images/TwitterLogo.jpg';
import Logo3 from '../Images/YoutubeLogo.jpg';


export default function Navi() {
    const newLocal = 'logo-image';
    const newLocal_1 = "AGRO-online-system";
    const newLocal_2 = 'logo-image1';
    const newLocal_3 = "home-about-us";
  return (
    <div>
      <div className="image"/>
          <img src={Logo} alt={Logo} width={20} height={20} className={newLocal}></img>
          <div className="box"/>
          <div className="rectangle" />
          <div className="label"/>
          <div className={newLocal_1}>AGRO Online System&nbsp;&nbsp;|</div>
          <div className="fbimage"/>
          <a href='https://web.facebook.com/'><img src={Logo1} alt={Logo1} width={20} height={20} className={newLocal_2} /></a>
          <div className="twitterimg"/>
          <a href='https://twitter.com/login'><img src={Logo2} alt={Logo2} width={20} height={20} className={'logo-image2'}/></a>
          <div className="youtubeimg"/>
          <a href='https://www.youtube.com/'><img src={Logo3} alt={Logo3} width={20} height={20} className={'logo-image3'}/></a> 
          <div className="label1"/>
          <p className={newLocal_3}><a href="/">Home</a>&nbsp;&nbsp;  <a href="/aboutus">About us</a>&nbsp;&nbsp;  <a href="/contact">Contact US</a>&nbsp;&nbsp;  <a href="/login">Login</a></p>
          </div>
  );
}
