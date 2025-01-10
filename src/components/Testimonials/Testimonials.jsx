import React from "react";
import TestimonialCss from './../Testimonials/Testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import clientImg1 from './../../assets/testimonial-1.png'
import clientImg2 from './../../assets/testimonial-2.png'
import clientImg3 from './../../assets/testimonial-3.png'

function Testimonials() {
    return (
        <section className={TestimonialCss.testimonial}>
            <div className="Headings">
            <h2>testimonial</h2>
                <h1>WHAT PEOPLE ARE SAYING ABOUT US</h1>
            </div>
            <Swiper className={TestimonialCss.TetsSlider}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                    1400: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 2
                    },
                    900: {
                        slidesPerView: 2
                    },
                    500: {
                        slidesPerView: 1
                    },

                }}
            >
                {/* slide1 */}
                <SwiperSlide>
                    <div className={TestimonialCss.test_box}>
                        <div className={TestimonialCss.test_card}>
                            <div className={TestimonialCss.test_info}>
                                <h2>Nick Davis</h2>
                                <h5>UI/UX Designer</h5>
                            </div>
                            <p>Driven by innovation and creativity, we're constantly evolving and expanding our platform to bring you the latest and greatest in gaming.</p>
                        </div>
                        <div className={TestimonialCss.client_img}>
                            <img src={clientImg1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* slide2 */}
                <SwiperSlide>
                    <div className={TestimonialCss.test_box}>
                        <div className={TestimonialCss.test_card}>
                            <div className={TestimonialCss.test_info}>
                                <h2>Miranda Halim</h2>
                                <h5>Founder</h5>
                            </div>
                            <p>Driven by innovation and creativity, we're constantly evolving and expanding our platform to bring you the latest and greatest in gaming.</p>
                        </div>
                        <div className={TestimonialCss.client_img}>
                            <img src={clientImg2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* slide3 */}
                <SwiperSlide>
                    <div className={TestimonialCss.test_box}>
                        <div className={TestimonialCss.test_card}>
                            <div className={TestimonialCss.test_info}>
                                <h2>Alonso Dowson</h2>
                                <h5>Ceo</h5>
                            </div>
                            <p>Driven by innovation and creativity, we're constantly evolving and expanding our platform to bring you the latest and greatest in gaming.</p>
                        </div>
                        <div className={TestimonialCss.client_img}>
                            <img src={clientImg3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* slide4 */}
                <SwiperSlide>
                    <div className={TestimonialCss.test_box}>
                        <div className={TestimonialCss.test_card}>
                            <div className={TestimonialCss.test_info}>
                                <h2>Miranda Halim</h2>
                                <h5>Founder</h5>
                            </div>
                            <p>Driven by innovation and creativity, we're constantly evolving and expanding our platform to bring you the latest and greatest in gaming.</p>
                        </div>
                        <div className={TestimonialCss.client_img}>
                            <img src={clientImg2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Testimonials