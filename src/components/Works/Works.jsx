import React from "react";
import WorksCss from './../Works/Works.module.css'
import CardBgImg from './../../assets/work-card-bg1-1.png'
function Works() {
    return (
        <div className={WorksCss.our_works}>
            <div className={WorksCss.work_head}>
                <h1>WORKS</h1>
            </div>
            <div className={WorksCss.work_container}>
                {/* card1 */}
                <div className={WorksCss.work_card}>
                    <div className={WorksCss.work_box}>
                        <div className={WorksCss.work_text}>
                            <h1>Upcoming Game Release</h1>
                            <span>/ CyberSaga Chronicles</span>
                        </div>
                        <h2>Action - Adventure</h2>
                    </div>
                    <marquee behavior="alternate" direction="">
                        <div className={WorksCss.marquee_text}>
                            <h1>Upcoming Game Release</h1>
                            <span>/</span>
                            <h1>Upcoming Game Release</h1>
                            <span>/</span>
                            <h1>Upcoming Game Release</h1>
                            <span>/</span>
                            <h1>Upcoming Game Release</h1>
                            <span>/</span>
                            <h1>Upcoming Game Release</h1>
                            <span>/</span>
                            <h1>Upcoming Game Release</h1>
                            <span>/</span>
                            <h1>Upcoming Game Release</h1>
                            <span>/</span>
                            <h1>Upcoming Game Release</h1>
                            <span>/</span>
                        </div>
                    </marquee>
                </div>
                {/* card2 */}
                <div className={WorksCss.work_card}>
                    <div className={WorksCss.work_box}>
                        <div className={WorksCss.work_text}>
                            <h1>The Rise of cloud Gaming</h1>
                            <span>/ Multiplayer</span>
                        </div>
                        <h2>Adventure - pvp</h2>
                    </div>
                    <marquee behavior="alternate" direction="">
                        <div className={WorksCss.marquee_text}>
                            <h1>Upcoming Game Release</h1>
                            <span>/</span>
                            <h1>The Rise of cloud Gaming</h1>
                            <span>/</span>
                            <h1>The Rise of cloud Gaming</h1>
                            <span>/</span>
                            <h1>The Rise of cloud Gaming</h1>
                            <span>/</span>
                            <h1>The Rise of cloud Gaming</h1>
                            <span>/</span>
                            <h1>The Rise of cloud Gaming</h1>
                            <span>/</span>
                            <h1>The Rise of cloud Gaming</h1>
                            <span>/</span>
                            <h1>The Rise of cloud Gaming</h1>
                            <span>/</span>
                        </div>
                    </marquee>
                </div>
                {/* card3 */}
                <div className={WorksCss.work_card}>
                    <div className={WorksCss.work_box}>
                        <div className={WorksCss.work_text}>
                            <h1>Behind The Scene</h1>
                            <span>/ Infinity Forge</span>
                        </div>
                        <h2>Strategy</h2>
                    </div>
                    <marquee behavior="alternate" direction="">
                        <div className={WorksCss.marquee_text}>
                            <h1> Behind The Scene</h1>
                            <span>/</span>
                            <h1> Behind The Scene</h1>
                            <span>/</span>
                            <h1> Behind The Scene</h1>
                            <span>/</span>
                            <h1> Behind The Scene</h1>
                            <span>/</span>
                            <h1> Behind The Scene</h1>
                            <span>/</span>
                            <h1> Behind The Scene</h1>
                            <span>/</span>
                            <h1> Behind The Scene</h1>
                            <span>/</span>
                            <h1> Behind The Scene</h1>
                            <span>/</span>
                        </div>
                    </marquee>
                </div>
                {/* card4 */}
                <div className={WorksCss.work_card}>
                    <div className={WorksCss.work_box}>
                        <div className={WorksCss.work_text}>
                            <h1>Gaming  Event Spotlight</h1>
                            <span>/ 2023 Recap</span>
                        </div>
                        <h2>/ Sports -Racing</h2>
                    </div>
                    <marquee behavior="alternate" direction="">
                        <div className={WorksCss.marquee_text}>
                            <h1>Gaming  Event Spotlight</h1>
                            <span>/</span>
                            <h1>Gaming  Event Spotlight</h1>
                            <span>/</span>
                            <h1>Gaming  Event Spotlight</h1>
                            <span>/</span>
                            <h1>Gaming  Event Spotlight</h1>
                            <span>/</span>
                            <h1>Gaming  Event Spotlight</h1>
                            <span>/</span>
                            <h1>Gaming  Event Spotlight</h1>
                            <span>/</span>
                            <h1>Gaming  Event Spotlight</h1>
                            <span>/</span>
                            <h1>Gaming  Event Spotlight</h1>
                            <span>/</span>
                        </div>
                    </marquee>
                </div>
                {/* card5 */}
                <div className={WorksCss.work_card}>
                    <div className={WorksCss.work_box}>
                        <div className={WorksCss.work_text}>
                            <h1>Gaming for a cause</h1>
                            <span>/ Community Spotlight</span>
                        </div>
                        <h2>battle royale -pvp</h2>
                    </div>
                    <marquee behavior="alternate" direction="">
                        <div className={WorksCss.marquee_text}>
                            <h1>Gaming for a cause</h1>
                            <span>/</span>
                            <h1>Gaming for a cause</h1>
                            <span>/</span>
                            <h1>Gaming for a cause</h1>
                            <span>/</span>
                            <h1>Gaming for a cause</h1>
                            <span>/</span>
                            <h1>Gaming for a cause</h1>
                            <span>/</span>
                            <h1>Gaming for a cause</h1>
                            <span>/</span>
                            <h1>Gaming for a cause</h1>
                            <span>/</span>
                            <h1>Gaming for a cause</h1>
                            <span>/</span>
                        </div>
                    </marquee>
                </div>
            </div>
        </div>
    );
}

export default Works