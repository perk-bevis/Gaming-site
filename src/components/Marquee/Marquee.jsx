import React from 'react';
import MarqueeCss from './Marquee.module.css';
import skullImg from '../../assets/skull-icon.png';

function Marquee() {
  return (
    <marquee behavior="alternate" direction="">
      <div className={MarqueeCss.marquee_text}>
        <h1>Gaming Community</h1>
        <img src={skullImg} alt="" className={MarqueeCss.skullImg} />
        <h1>Inclusive Gaming</h1>
        <img src={skullImg} alt="" className={MarqueeCss.skullImg} />
        <h1>Gaming Community</h1>
        <img src={skullImg} alt="" className={MarqueeCss.skullImg} />
        <h1>Inclusive Gaming</h1>
        <img src={skullImg} alt="" className={MarqueeCss.skullImg} />
      </div>
    </marquee>
  );
}

export default Marquee;