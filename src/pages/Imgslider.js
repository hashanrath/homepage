import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import slide1 from '../Images/abb.jpg';
import slide2 from '../Images/as.jpg';
import slide3 from '../Images/cuimg.jpeg';
import slide4 from '../Images/bgimg.jpeg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


export default function Imgslider() {
  return (
    <div>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation style={{marginTop:"250px", left:"-100px"}}
      pagination={{ clickable: true }}
      
     
    >
      <SwiperSlide>
        <img src={slide1} alt={slide1} style={{ width:"50%", height:"50vh",marginLeft: "-100px"  }}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt={slide2} style={{width:"50%", height:"50vh",  marginLeft: "-100px" }}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt={slide3} style={{width:"50%", height:"50vh",  marginLeft: "-100px" }}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt={slide4} style={{width:"50%", height:"50vh", marginLeft: "-100px" }}/>  
      </SwiperSlide>

    </Swiper>
    </div>
  );
}
