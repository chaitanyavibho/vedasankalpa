import { Button, Container, Link, Typography } from "@mui/material";
import '../styles/pages/home.css'
import Sevacards from "../components/Sevacards";
import Donation from "../components/Donation";
import Grid from '@mui/material/Grid';
import seva_bookings from '../assets/images/seva-bookings/step-for-booking-seva.png';
import curve_bg_1 from '../assets/images/seva-bookings/image-01.png';
import curve_bg_2 from '../assets/images/seva-bookings/image-02.png';
import curve_bg_3 from '../assets/images/seva-bookings/image-03.png';
import curve_bg_4 from '../assets/images/seva-bookings/image-04.png';
import Special_offer from "../components/Special_offer";
import Campaigner_card from "../components/Campaigner_card";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Testimonial from "../components/Testimonial";

import React, { useRef, useState } from 'react';
import person_1 from '../assets/images/testimonial/person-1.png';
import person_3 from '../assets/images/testimonial/person-3.png';
import person_4 from '../assets/images/testimonial/person-4.png';

import bookingstep_1 from '../assets/images/seva-bookings/booking-step-01.svg'
import bookingstep_2 from '../assets/images/seva-bookings/booking-step-02.svg'
import bookingstep_3 from '../assets/images/seva-bookings/booking-step-03.svg'
import bookingstep_4 from '../assets/images/seva-bookings/booking-step-04.svg'
import bookingstep_5 from '../assets/images/seva-bookings/booking-step-05.svg'


function Home() {

    return (
        <>
            <Header />
            <section className="app_header"></section>
            <section className="small_support_large">
                <Container>
                    <div className="small_support-main">
                        <Donation />
                    </div>
                    <div className="special_pujas_donations">
                        <div className='special_pujas_donation_title'>
                            <div className="donation_puja_buttons">
                                <Button disableRipple disableElevation className="puja btn active">Puja</Button>
                                <Button disableRipple disableElevation className="donation btn">Donation</Button>
                            </div>
                            <h3>Special Pujas & Donations</h3>
                            <p> dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the se.</p>
                        </div>
                        <Sevacards />
                    </div>

                </Container>
            </section>
            <section className="seva_bookings">
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="seva_bookings_image">
                                <img src={seva_bookings} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="seva_bookings_content">
                                <h2>Step for Booking Sevas</h2>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="step_booking_main_box">
                        <div className="seva_booking_mini_main_content">
                            <div className="seva_booking_mini_content">
                                <img className="seva_booking-image" src={bookingstep_1} />
                                <h3>Select Your Seva</h3>
                                <p>Embark on the spiritual journey by selecting the sacred seva.</p>
                                <div className="curve_bg">
                                    <img src={curve_bg_1} />
                                </div>
                            </div>
                        </div>
                        <div className="seva_booking_mini_main_content_1">
                            <div className="seva_booking_mini_content">
                                <img className="seva_booking-image" src={bookingstep_2} />
                                <h3>Enter Your Details</h3>
                                <p>Join the divine worship by providing your information.</p>
                                <div className="curve_bg">
                                    <img src={curve_bg_2} />
                                </div>
                            </div>
                        </div>
                        <div className="seva_booking_mini_main_content_2">
                            <div className="seva_booking_mini_content">
                                <img className="seva_booking-image" src={bookingstep_3} />
                                <h3>Complete Payment</h3>
                                <p>Engage your sacred journey by finalizing the payment.</p>
                                <div className="curve_bg">
                                    <img src={curve_bg_3} />
                                </div>
                            </div>
                        </div>
                        <div className="seva_booking_mini_main_content_3">
                            <div className="seva_booking_mini_content">
                                <img className="seva_booking-image" src={bookingstep_4} />
                                <h3>Participate in Seva</h3>
                                <p>View your Seva via a YouTube live stream, Zoom session, or recorded video.</p>
                                <div className="curve_bg">
                                    <img src={curve_bg_4} />
                                </div>
                            </div>
                        </div>
                        <div className="seva_booking_mini_main_content_4">
                            <div className="seva_booking_mini_content">
                                <img className="seva_booking-image" src={bookingstep_5} />
                                <h3>Receive the Prasad</h3>
                                <p>Blessed offerings and Prasad will be delivered to your doorstep upon completion of seva.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="testimonial">
                <div className="child_1"><img src={person_1} alt="person_1" /></div>
                <div className="child_2"><img src={person_1} alt="person_1" /></div>
                <div className="child_3"><img src={person_3} alt="person_3" /></div>
                <div className="child_4"><img src={person_4} alt="person_4" /></div>
                <div className="child_5"><img src={person_3} alt="person_4" /></div>
                <div className="">
                    <Testimonial />
                </div>
            </section>
            <section className="our-special-offers">
                <Container>
                    <div className="our-special-offers-bg">
                        <Special_offer />
                    </div>
                    <div className="campaigner-title">
                        <h2>Campaigner</h2>
                        <p>Join us, and serve the Sanatan Dharma</p>
                    </div>
                    <div className="main_campaigner_card">
                        <Campaigner_card />
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}
export default Home;