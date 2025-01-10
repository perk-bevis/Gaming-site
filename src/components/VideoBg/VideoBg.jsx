import React from "react";
import VideoCss from './../VideoBg/VideoBg.module.css'
import videoBg from './../../assets/video2-1.png';
function VideoBg(){
    return(
        <div className={VideoCss.bg_video}>
        <i className={`${VideoCss.play_icon} ri-play-large-fill`}></i>
    </div>
    );
}

export default VideoBg