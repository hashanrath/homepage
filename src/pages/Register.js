import React from 'react';
import '../pages/register.css';
import riceim from '../Images/ds.jpeg';
import agroim from '../Images/Alogo.jpeg';


export default function Register() {
  return (
    <div>
      <img src={riceim} alt={riceim} width={20} height={20} className={'bgim'}/>
      <div className="regrec"/>
      <div className="lbuserlog">USER REGESTATION..</div>
      <img src={agroim} alt={agroim} width={20} height={20} className={'agroi'}/>
      <div className="lblogus">Create an account</div>
      <div className="reginfo">Your Name:<br/><br/><br/>Email Address:<br/><br/><br/>Phone Number:<br/><br/><br/>Password:<br/><br/><br/>
      Re Enter Password:<br/><br/><br/></div>
      <div className="regbt"><a href='/login'><input type="submit" name="submit"  value="Register"  ></input></a></div>
      <div className="textbox">
        <input type="text" placeholder="Type here:"  />
        </div>
      <div className="textbox1">
        <input type="text" placeholder="Type here:"  />
        </div>
      <div className="textbox2">
        <input type="text" placeholder="Type here:"  />
        </div>
      <div className="textbox3">
        <input type="password" placeholder="Type here:"  />
        </div>
      <div className="textbox4">
        <input type="password" placeholder="Type here:"  />
        </div>
      
    </div>
  );
}
