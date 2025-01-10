import React, { useRef } from 'react';
import HeaderCss from './../Header/Header.module.css'
import HeroImg from './../../assets/hero.png'
function Header(){
    return (
        <header>
                <div className={HeaderCss.hero_content}>
                <h1 className={HeaderCss.hero_title}>ZOX<span> GAMING</span></h1>
                <div className={HeaderCss.hero_boxs}>
                    <p>*Based in paris, available woldwide</p>
                    <div className={HeaderCss.hero_social}>
                        <i className={`${HeaderCss.hero_icon} ri-facebook-fill`}></i>
                        <i className={`${HeaderCss.hero_icon} ri-twitter-fill`}></i>
                        <i className={`${HeaderCss.hero_icon} ri-youtube-fill`}></i>
                        <i className={`${HeaderCss.hero_icon} ri-behance-fill`}></i>
                    </div>
                </div>
                <div className={HeaderCss.hero_bottom}>
                    <div className={HeaderCss.hero_bottom_content}>
                        <h2>SOME COOL & DROP CHARETERS</h2>
                        <p>Based in paris, available woldwideBased in paris, available woldwideBased in paris, available woldwideBased in paris, available woldwide</p>
                        <button> NEXT CAN BE YOU
                            <i className={'ri-arrow-right-line'}></i>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className={HeaderCss.hero_img}>
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className={HeaderCss.shape}></div>
                    <div className={HeaderCss.shape2}></div>
                </div>
            </div>
        </header>
    )
}

export default Header