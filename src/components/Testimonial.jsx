import React from "react";
import rakesh from '../assets/images/testimonial/rakesh.png';
import '../styles/components/testimonial.css';
import { Container, Typography } from "@mui/material";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Testimonial() {
    return(

        <div>
        <Container>
            <div className="testimonial_title">
                <h2>Testimonial</h2>
            </div>
                    <Swiper
                        centeredSlides={true}
                        autoplay={{
                         delay: 2000,
                        disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        breakpoints={{

                            320: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 1,
                              spaceBetween: 30,
                            },
                            992: {
                              slidesPerView: 1,
                              spaceBetween: 30,
                            },
                          }}
                    >
                        <SwiperSlide>
                            <div className="testimonial-content">
                                <div className="testimonial-text">
                                    <img src={rakesh} alt="rakesh" />
                                    <div className="testimonial-text-1">
                                        <Typography variant="h6">Rakesh Roshan</Typography>
                                        <Typography variant="body1" >Veda Sankalpa</Typography>
                                    </div>
                                </div>
                                <Typography variant="body2" className="testimonial-content-ptag">Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentencesLorem Epson is a dummy text to fill the sentences.</Typography>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-content">
                                <div className="testimonial-text">
                                    <img src={rakesh} alt="rakesh" />
                                    <div className="testimonial-text-1">
                                        <Typography variant="h6">Rakesh Roshan</Typography>
                                        <Typography variant="body1" >Veda Sankalpa</Typography>
                                    </div>
                                </div>
                                <Typography variant="body2" className="testimonial-content-ptag">Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentencesLorem Epson is a dummy text to fill the sentences.</Typography>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-content">
                                <div className="testimonial-text">
                                    <img src={rakesh} alt="rakesh" />
                                    <div className="testimonial-text-1">
                                        <Typography variant="h6">Rakesh Roshan</Typography>
                                        <Typography variant="body1" >Veda Sankalpa</Typography>
                                    </div>
                                </div>
                                <Typography variant="body2" className="testimonial-content-ptag">Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentencesLorem Epson is a dummy text to fill the sentences.</Typography>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Container>
          {/* <div>
           <div className="testimonial-box">
            <div className="testimonial-box-content">
                <ul>
                    <li>
                        <img src={testimonial} alt="" />
                    </li>
                    <li>
                        <Rating/>
                    </li>
                </ul>
            </div>
            <h2>Small support large</h2>
            <p>Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences Lorem Epson</p>
           </div>
          </div>
          <div>
           <div className="testimonial-box">
            <div className="testimonial-box-content">
                <ul>
                    <li>
                        <img src={testimonial} alt="" />
                    </li>
                    <li>
                        <Rating/>
                    </li>
                </ul>
            </div>
            <h2>Small support large</h2>
            <p>Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences Lorem Epson</p>
           </div>
          </div>
          <div>
           <div className="testimonial-box">
            <div className="testimonial-box-content">
                <ul>
                    <li>
                        <img src={testimonial} alt="" />
                    </li>
                    <li>
                        <Rating/>
                    </li>
                </ul>
            </div>
            <h2>Small support large</h2>
            <p>Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences Lorem Epson</p>
           </div>
          </div>
          <div>
           <div className="testimonial-box">
            <div className="testimonial-box-content">
                <ul>
                    <li>
                        <img src={testimonial} alt="" />
                    </li>
                    <li>
                        <Rating/>
                    </li>
                </ul>
            </div>
            <h2>Small support large</h2>
            <p>Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences Lorem Epson</p>
           </div>
          </div> */}
      </div>
      
    )
}
export default Testimonial;