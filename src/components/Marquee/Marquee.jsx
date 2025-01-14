import React from 'react';
import MarqueeCss from './Marquee.module.css';
import skullImg from '../../assets/skull-icon.png';

function Marquee() {
  return (
    <marquee behavior="alternate" direction="">
      <div className={MarqueeCss.marquee_text}>
        <h1>Cộng đồng chơi game</h1>
        <img src={skullImg} alt="" className={MarqueeCss.skullImg} />
        <h1>Chơi game toàn diện</h1>
        <img src={skullImg} alt="" className={MarqueeCss.skullImg} />
        <h1>Cộng đồng chơi game</h1>
        <img src={skullImg} alt="" className={MarqueeCss.skullImg} />
        <h1>Chơi game toàn diện</h1>
        <img src={skullImg} alt="" className={MarqueeCss.skullImg} />
      </div>
    </marquee>
  );
}

export default Marquee;
