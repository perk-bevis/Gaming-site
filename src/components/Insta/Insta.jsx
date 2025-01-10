import React from 'react';
import InstaCss from './../Insta/Insta.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import instImg1 from './../../assets/insta-1.png'
import instImg2 from './../../assets/insta-2.png'
import instImg3 from './../../assets/insta-3.png'
import instImg4 from './../../assets/insta-4.png'
import instImg5 from './../../assets/insta-5.png'
import instImg6 from './../../assets/insta-6.png'


function Insta() {
    return (
        <Swiper className={InstaCss.InstaSlider}
            slidesPerView={1}
            loop={true}
            breakpoints={{
                1400: {
                    slidesPerView: 6
                },
                1200: {
                    slidesPerView: 5
                },
                900: {
                    slidesPerView: 3
                },
                500: {
                    slidesPerView: 1
                },

            }}
        >
            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={instImg1} alt="" />
                    <i className="ri-instagram-line"></i>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={instImg2} alt="" />
                    <i className="ri-instagram-line"></i>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={instImg3} alt="" />
                    <i className="ri-instagram-line"></i>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={instImg4} alt="" />
                    <i className="ri-instagram-line"></i>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={instImg5} alt="" />
                    <i className="ri-instagram-line"></i>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={instImg6} alt="" />
                    <i className="ri-instagram-line"></i>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={InstaCss.insta_img}>
                    <img src={instImg2} alt="" />
                    <i className="ri-instagram-line"></i>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Insta