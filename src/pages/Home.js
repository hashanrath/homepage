import React from 'react';
import Navi from '../component/Navi';
import '../pages/home.css';
import Logohome from '../Images/image.jpeg';
import imglogo from '../Images/Alogo.jpeg';
import Footer from '../component/Footer';
import video1 from '../Videos/vdo5.mp4';




export default function Home() {
    
  const newLocal = 'homebox-image';
  return (
    <div>
    <Navi/>
    <div className="homeimage"/>
    <img src={Logohome} alt={Logohome} width={20} height={20} className={'home-image'}/>
    <div className="homebox"/>
    <div className="homerectangle"/>
    <div className="homeimginbox"/>
    <img src={imglogo} alt={imglogo} width={20} height={20} className={newLocal}/>
    <div className="homelable"/>
    <p className="typ"> Click, tap, harvest - ease at your fingertips,<br /> AGRO&#39;s wisdom in every farmer’s scripts.</p>
    <div className="homevdo"/>
    <video controls autoPlay loop src={video1} alt={video1} width={20} height={20} className={'vdo1'}/>
     <Footer/>
    </div>
  
  );
}
