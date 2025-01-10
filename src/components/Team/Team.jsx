import React from "react";
import TeamCss from './../Team/Team.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import teamImg1 from './../../assets/team-2-1.jpg'
import teamImg2 from './../../assets/team-2-2.jpg'
import teamImg3 from './../../assets/team-2-3.jpg'
import teamImg4 from './../../assets/team-2-4.jpg'

function Team(){
    return(
        <section className={TeamCss.our_team}>
            <div className="Headings">
                <h2>Our Team</h2>
                <h1>OUR AVENGERS</h1>
            </div>

            <Swiper className={TeamCss.TeamSlider}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            breakpoints={{
                1400: {
                    slidesPerView: 4
                },
                1200: {
                    slidesPerView: 4
                },
                900: {
                    slidesPerView: 2
                },
                500: {
                    slidesPerView: 1
                },
    
            }}
            >

                <SwiperSlide>
                    <div className={TeamCss.TeamCard}>
                        <div className={TeamCss.Team_img}>
                            <img src={teamImg1} alt="" />
                            <span>Ceo</span>
                        </div>
                        <div className={TeamCss.team_det}>
                            <div className={TeamCss.team_info}>
                                <h2>James tylor</h2>
                                <p>Measure and analyze performance</p>
                            </div>
                            <div className={TeamCss.social}>
                                <i className="ri-facebook-fill"></i>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-instagram-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={TeamCss.TeamCard}>
                        <div className={TeamCss.Team_img}>
                            <img src={teamImg2} alt="" />
                            <span>Designer</span>
                        </div>
                        <div className={TeamCss.team_det}>
                            <div className={TeamCss.team_info}>
                                <h2>Katty Williams</h2>
                                <p>Measure and analyze performance</p>
                            </div>
                            <div className={TeamCss.social}>
                                <i className="ri-facebook-fill"></i>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-instagram-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={TeamCss.TeamCard}>
                        <div className={TeamCss.Team_img}>
                            <img src={teamImg3} alt="" />
                            <span>Developer</span>
                        </div>
                        <div className={TeamCss.team_det}>
                            <div className={TeamCss.team_info}>
                                <h2>Herry Newman</h2>
                                <p>Measure and analyze performance</p>
                            </div>
                            <div className={TeamCss.social}>
                                <i className="ri-facebook-fill"></i>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-instagram-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={TeamCss.TeamCard}>
                        <div className={TeamCss.Team_img}>
                            <img src={teamImg4} alt="" />
                            <span>founder</span>
                        </div>
                        <div className={TeamCss.team_det}>
                            <div className={TeamCss.team_info}>
                                <h2>James tylor</h2>
                                <p>Measure and analyze performance</p>
                            </div>
                            <div className={TeamCss.social}>
                                <i className="ri-facebook-fill"></i>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-instagram-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={TeamCss.TeamCard}>
                        <div className={TeamCss.Team_img}>
                            <img src={teamImg4} alt="" />
                            <span>Designer</span>
                        </div>
                        <div className={TeamCss.team_det}>
                            <div className={TeamCss.team_info}>
                                <h2>Katty Williams</h2>
                                <p>Measure and analyze performance</p>
                            </div>
                            <div className={TeamCss.social}>
                                <i className="ri-facebook-fill"></i>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-instagram-line"></i>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    );
}

export default Team