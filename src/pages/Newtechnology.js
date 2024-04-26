import React from 'react';
import '../pages/newtechnology.css';
import Navi from '../component/Navi';
import video10 from '../Videos/new.mp4';
import Footer from '../component/Footer';
import DropdownMenu from '../component/DropdownMenu';

export default function Newtechnology() {
  return (
    <div>
      <Navi />
      <div className='rectanglenew' />
      <div className='lablenewtech'>New Technologies For You...</div>
      {/* Ensure video is muted and has a reasonable size */}
      <video  autoPlay loop muted src={video10} alt={video10} width={20} height={20}  className={'vdo10'} />
      <DropdownMenu/>
      <Footer />
    </div>
  );
}
