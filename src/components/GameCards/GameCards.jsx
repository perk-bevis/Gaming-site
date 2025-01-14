import React from 'react';
import GameCardCss from './../GameCards/GameCards.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import GameCardImg1 from './../../assets/game-card1.png'
import GameCardImg2 from './../../assets/game-card2.png'
import GameCardImg3 from './../../assets/game-card3.png'
import GameCardImg4 from './../../assets/game-card4.png'

function GameCards() {
    return (
        <Swiper className={GameCardCss.GameSlider}
        slidesPerView={1}
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
            <div className={GameCardCss.GameCards}>
                <div className={GameCardCss.game_img}>
                    <img src={GameCardImg1} alt="" />
                </div>
                <button> TẢI XUỐNG
                    <i className={'ri-arrow-right-line'}></i>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={GameCardCss.GameCards}>
                <div className={GameCardCss.game_img}>
                    <img src={GameCardImg2} alt="" />
                </div>
                <button> TẢI XUỐNG
                    <i className={'ri-arrow-right-line'}></i>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={GameCardCss.GameCards}>
                <div className={GameCardCss.game_img}>
                    <img src={GameCardImg3} alt="" />
                </div>
                <button> TẢI XUỐNG
                    <i className={'ri-arrow-right-line'}></i>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={GameCardCss.GameCards}>
                <div className={GameCardCss.game_img}>
                    <img src={GameCardImg4} alt="" />
                </div>
                <button> TẢI XUỐNG
                    <i className={'ri-arrow-right-line'}></i>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={GameCardCss.GameCards}>
                <div className={GameCardCss.game_img}>
                    <img src={GameCardImg4} alt="" />
                </div>
                <button> TẢI XUỐNG
                    <i className={'ri-arrow-right-line'}></i>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </SwiperSlide>
    </Swiper>
    );
}

export default GameCards
