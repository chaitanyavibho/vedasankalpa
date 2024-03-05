import * as React from 'react';
import Special_Pujas_Donations from '../assets/images/icons/puja-donation.png'
import rightarrow from '../assets/images/icons/white-right-arrow.svg'
import { Button, Link } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar} from 'swiper/modules';
import '../styles/components/sevacards.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Sevacards(){
  return (
  
    <div className='special-pujas-box'>
     
            <Swiper
              modules={[Pagination, Scrollbar]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}

              breakpoints={{

                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className='pujas_box'>
                  <img src={Special_Pujas_Donations} alt="" />
                  <h3>Lorem Epson</h3>
                  <p>Thai Pusam Special Rituals in Tiruvannamalai: Subramanya Moo..</p>
                  <h4>Location: Madhapur</h4>
                  <h5>Date: 2th Feb’ 8:00 PM</h5>
                
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='pujas_box'>
                  <img src={Special_Pujas_Donations} alt="" />
                  <h3>Lorem Epson</h3>
                  <p>Thai Pusam Special Rituals in Tiruvannamalai: Subramanya Moo..</p>
                  <h4>Location: Madhapur</h4>
                  <h5>Date: 2th Feb’ 8:00 PM</h5>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='pujas_box'>
                  <img src={Special_Pujas_Donations} alt="" />
                  <h3>Lorem Epson</h3>
                  <p>Thai Pusam Special Rituals in Tiruvannamalai: Subramanya Moo..</p>
                  <h4>Location: Madhapur</h4>
                  <h5>Date: 2th Feb’ 8:00 PM</h5>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='pujas_box'>
                  <img src={Special_Pujas_Donations} alt="" />
                  <h3>Lorem Epson</h3>
                  <p>Thai Pusam Special Rituals in Tiruvannamalai: Subramanya Moo..</p>
                  <h4>Location: Madhapur</h4>
                  <h5>Date: 2th Feb’ 8:00 PM</h5>
                  
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
       );
  }
  export default Sevacards;