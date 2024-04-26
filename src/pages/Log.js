
import '../pages/log.css';
import riceimg from '../Images/GM.jpeg';
import rec from '../Images/Alogo.jpeg';



export default function Log() {




  return (
    <div>
      <div className="bgimg"/>
      <img src={riceimg} alt={riceimg} width={20} height={20} className={'bgimg1'}/>
      <div className="logbox"/>
      <div className="logrectangle"/>
      <div className="imgrec"/>
      <img src={rec} alt={rec} width={20} height={20} className={'imgrec1'}/>
      <div className="lglabel"/>
      <div className="lglable1">User Login Here...</div>
      <div className="emaillb"/>
      <div className="emaillb1">Your Email:</div>
      <div className="passlb"/>
      <div className="passlb1">Your Password:</div>
      <div className="Line"/>
      <div className="loglb"/>
      <div className="loglb1"><a href='/userH'><input type="submit" name="submit"  value="Login"  ></input></a></div>
      <div className="fplable"/>
      <div className="fplable1"><a href='/fpass'>Forgot Password ?</a></div>
      <div className="slable"/>
      <div className="slable1"><a href='/re'>Create an account</a></div> 
      <div className="input-box">
        <input type="password" placeholder="Password"  />
      </div>
      <div className="input-box1">
        <input type="text" placeholder="your email" />
      </div>
    </div>
  );
}
