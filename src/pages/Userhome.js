import React from 'react';
import '../pages/userhome.css';
import Navi from '../component/Navi';
import hmimg from '../Images/4.jpeg';
import myImage from '../Images/btn tec.jpeg';
import myImage1 from '../Images/btn m.jpeg';
import myImage2 from '../Images/btn cr.jpeg';
import myImage3 from '../Images/btn d.jpeg';
import myImage4 from '../Images/chtt.png';
import Footer from '../component/Footer';
import blur from '../Images/blur.jpg';
import blur1 from '../Images/welc.webp';
import usrp from '../Images/up.jpeg';

export default function Userhome() {

    const handleClick = () => {
        console.log('Button clicked!');
    };
  return (
    <div>
      <Navi/>
      <img src={hmimg} alt={hmimg} width={20} height={20} className={'imghm'}/>
      <button onClick={handleClick} className="image-button">
      <a href='/new'><img src={myImage} alt="Click Me" /></a>
      <a href='/new'><span className="button-text">New Technology</span></a>
      </button>
      <button onClick={handleClick} className="image1-button">
      <a href='/login'><img src={myImage1} alt="Click Me" /></a>
      <a href='/login'><span className="button1-text">Market</span></a>
      </button>
      <button onClick={handleClick} className="image2-button">
      <a href='/login'><img src={myImage2} alt="Click Me" /></a>
      <a href='/login'><span className="button2-text">Crop Cultivation</span></a>
      </button>
      <button onClick={handleClick} className="image3-button">
      <a href='/login'><img src={myImage3} alt="Click Me" /></a>
      <a href='/login'><span className="button3-text">Disease</span></a>
      </button>
      <button onClick={handleClick} className="image4-button">
      <a href='/chat'><img src={myImage4} alt="Click Me" /></a>
      <a href='/chat'><span className="button4-text">Chat Window</span></a>
      </button>
      <img src={blur} alt={blur} width={20} height={20} className={'imgblur'}/>
      <img src={blur1} alt={blur1} width={20} height={20} className={'imgblur1'}/>
      <div className='typing'>Welcome to the Essence of Growth</div>
      <div className='typing1'> Step into a world where the soil<br/>is rich with promise 
      and the horizon<br/>is ripe with possibility.Here on your<br/>user homepage, we celebrate the<br/>harmonious dance of
      nature and nurture,<br/>capturing the timeless beauty of<br/> 
      agricultural life.Our homepage is a <br/> verdant canvas, painted 
      with the<br/>colors of fresh produce and the golden<br/>hues of sunrise over rolling fields. </div>
      <div className="uhrectangle"/>
      <div className='typing3'>Select Your Option</div>
      <a href='/useredit'><img src={usrp} alt={usrp} width={30} height={30} className={'userp'}/></a>
      
      <Footer/>
    </div>
  );
}
