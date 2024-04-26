import React from 'react';
import '../pages/newtechnologyfarmers.css';
import Navi from '../component/Navi';
import farming from '../Videos/vd1.mp4';
import Footer from '../component/Footer';

export default function Newtechnologyfarmers() {
  return (
    <div>
      <Navi />
      <video  autoPlay loop muted src={farming} className='video-farming' />
      <div className='rectanglefarmer' />
      <div className='lablefarmer'>New Technologies In Farming</div>
      <div className="horizontal-line"></div>
      <Footer />
    </div>
  );
}
