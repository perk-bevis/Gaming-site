import React from 'react';
import ServiceCss from './../Services/Service.module.css';
import ServiceImg1 from './../../assets/service-icon1.png';
import ServiceImg2 from './../../assets/service-icon2.png';

function Service() {
  return (
    <section className={ServiceCss.services}>
      <div className={ServiceCss.service_head}>
        <h2>Chúng tôi có thể làm gì</h2>
      </div>
      <img src={ServiceImg1} alt="" className={ServiceCss.service_shape}/>
      <img src={ServiceImg2} alt="" className={`${ServiceCss.service_shape} ${ServiceCss.service_shape2}`}/>
      <div className={ServiceCss.service_content}>
          <div className={ServiceCss.service_item}>
              <span>01</span>
              <h1>Hệ thống game</h1>
          </div>

          <div className={ServiceCss.service_item}>
              <span>02</span>
              <h1>Kiểm thử game</h1>
          </div>
          <div className={ServiceCss.service_item}>
              <span>03</span>
              <h1>Tích Hợp AR/VR</h1>
          </div>
          <div className={ServiceCss.service_item}>
              <span>04</span>
              <h1>Thiết kế Game</h1>
          </div>
          <div className={ServiceCss.service_item}>
              <span>05</span>
              <h1>Phát triển Game</h1>
          </div>
      </div>
    </section>
  );
}

export default Service;
