import React from 'react';
import '../pages/contact.css';
import Navi from '../component/Navi';
import contactimage from '../Images/11.jpeg';
import contactimage1 from '../Images/dcu.jpeg';
import addresslogo from '../Images/address.jpeg';
import emaillogo from '../Images/email.jpeg';
import phlogo from '../Images/phone.jpeg';
import Cufooter from '../component/Cufooter';


export default function Contact() {

  return (
    <div>
      <Navi/>
      <img src={contactimage} alt={contactimage} width={20} height={20} className={'contactusimage'}/>
      <img src={contactimage1} alt={contactimage1} width={20} height={20} className={'contactusimage1'}/>
      <div className="firstrec"/>
      <div className="name">
        <input type="text" placeholder="Type here:"  />
        </div>
        <div className="email">
        <input type="text" placeholder="Type here:"  />
        </div>
        <div className="send"><input type="submit" name="submit"  value="Send"  ></input></div>
        <div className="yname">Enter Your Name  :</div>
        <div className="yemail">Enter Your Email  :</div>
        <div className="textwap">
          <textarea placeholder="Type somthing here:"></textarea>
        </div>
        <div className='addressrec'></div>
        <div className='emailrec'></div>
        <div className='phonerec'></div>
        <div className='adr'>Address</div>
        <div className='ema'>Email</div>
        <div className='phnu'>Phone Numbers</div>
        <img src={addresslogo} alt={addresslogo} width={20} height={20} className={'addresslogo'}/>
        <img src={emaillogo} alt={emaillogo} width={20} height={20} className={'emaillogo'}/>
        <img src={phlogo} alt={phlogo} width={20} height={20} className={'phlogo'}/>
        <div className='adr1'>No/165, Thalathuoya Road,<br/> Ketawala-Leula</div>
        <div className='ema2'>agroagri25@gmail.com</div>
        <div className='phnu3'>0768535551/081123456789</div>
        <Cufooter/>
    </div>
  );
}
