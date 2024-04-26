import React from 'react';
import '../pages/aboutus.css';
import Navi from '../component/Navi';
import Logoab from '../Images/2.jpeg';
import logoimg from '../Images/Alogo.jpeg';
import mypic1 from '../Images/my.jpg';
import Abfooter from '../component/Abfooter';


export default function About() {
  return (
    <div>
      <Navi/>
      <div className="aboutimage"/>
      <img src={Logoab} alt={Logoab} width={20} height={20} className={'about-image'}/>
      <div className="abbox"/>
      <div className="abrectangle"/>
      <div className="lbab"/>
      <p className='ablb'>About Us</p>
      <div className="fbox"/>
      <div className="frectangle"/>
      <div className="ftext"/>
      <p className="textf"> Welcome to Managing Economic Markets and Crop Cultivation!<br/><br/><br/>
          At the heart of our endeavor is a transformative web-based system designed to enhance 
          the operations of economic markets and empower farmers in their<br/> daily activities  
          Our platform brings you real-time updates on vegetable prices, facilitates efficient stock  
          management for traders, and contributes.To the<br/> preservation of vegetable quality while 
          reducing market traffic. For farmers, the system opens doors to diversified crop cultivation,
          provides insights into<br/> market demand, offers guidance on disease management, and  
          introduces modern farming techniques. As an added feature, we've created a dedicated <br/> 
          communication platform to foster collaboration and knowledge exchange among users.<br/><br/><br/>

    Join Us on This Journey of Innovation and Empowerment!
      </p>
      <div className="mlogo"/>
      <img src={logoimg} alt={logoimg} width={20} height={20} className={'logom'}/>
      <div className="intro"/>
      <p className="intr">Introduction About The AGRO..</p>
      <div className="vmbox"/>
      <div className="vmrectangle"/>
      <div className="visson"/>
      <p className="viss">Vision</p>
      <div className="vtext"/>
      <p className="textv">
          To revolutionize agricultural and economic trade practices in Sri Lanka through innovative<br/>
          technology solutions, fostering sustainability, prosperity, and empowerment across the<br/> 
          agricultural ecosystem.</p>
       <div className="mission"/>
       <p className="miss">Mission</p>
       <div className="mtext"/>
       <p className="textm">Our mission is to develop and implement a comprehensive web-based system that provides<br/> 
           real-time market information, promotes efficient communication, and empowers farmers and<br/>  
           traders with the tools and knowledge necessary to thrive in a dynamic agricultural landscape.<br/>  
           We are committed to addressing the systemic challenges faced by stakeholders, reducing<br/>  
           income disparity, minimizing vegetable wastage, and enhancing market efficiency through<br/>  
           accessible and user-centric technology solutions. Through collaboration, innovation, and<br/>  
           continuous improvement, we strive to create a more resilient and equitable agricultural sector<br/> 
           in Sri Lanka.</p>
       <div className="abox"/>
       <div className='rectanglea'/>
       <div className='aim'/>
       <div className='aimm'>Aim</div>
       <div className="atext"/>
       <p className="texta">To develop a comprehensive web-based system that addresses the systemic challenges<br/>
          faced by farmers and traders in Sri Lanka's agricultural and economic trade centers, with a<br/>
          primary focus on real-time information on vegetable prices, stock quantities, market dynamics,<br/> 
          and promoting efficient communication among stakeholders.</p>
       <div className="object"/>
       <p className="objecttext">Our objectives revolve around addressing challenges in Sri Lanka's agricultural and economic<br/> 
              trade centers. We aim to tackle issues such as income disparities, vegetable wastage,<br/>  
              transportation challenges, market dynamics, and crop cultivation practices. By evaluating<br/> 
              existing technologies, we plan to design a user-friendly web-based system providing real-time<br/>  
              information on vegetable prices, stock quantities, and market trends. Rigorous testing,<br/>  
              stakeholder feedback, and comprehensive documentation will ensure the system's<br/>  
              functionality, usability, and effectiveness. We strive to measure the system's impact on critical<br/>  
              metrics, including farmers' income and reduced vegetable wastage. Our focus on seamless<br/>  
              data flow and interoperability aims to enhance the agricultural supply chain's efficiency.<br/>  
              Additionally, a feedback mechanism within the system will empower users to contribute<br/>  
              real-time input for continuous improvement.</p>
       <div className="obj"/>
       <p className="otext">Objectives</p>
       <div className="ebox"/>
       <div className="erectangle"/>
       <div className="mypic"/>
       <img src={mypic1} alt={mypic1} width={20} height={20} className={'picmy'}/>
       <div className="dlable"/>
       <p className="deve">Developed By,</p>
       <div className="ablable"/>
       <p className="lableab">Hashan Rathnayake<br/>
                              BSc Hons Software Engineering<br/>
                              Kingston University<br/>
                              2378313</p>
       <Abfooter/>
    </div>
  );
}
