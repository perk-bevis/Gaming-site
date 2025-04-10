import React from 'react';
import FooterCss from './../Footer/Footer.module.css'

function Footer() {
    return (
        <section className={FooterCss.footer}>
            <div className={FooterCss.footer_logo}>
                <a href="#">Zex <span>ora</span></a>
            </div>
            <div className={FooterCss.footer_menu}>
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Giới thiệu</a></li>
                <li><a href="#">Dự án</a></li>
                <li><a href="#">Highlights</a></li>
                <li><a href="#">Liên hệ</a></li>
            </div>
            <div className={FooterCss.footer_inputs}>
                <input type="text" placeholder='Your E-mail' />
                <i className="ri-mail-line"></i>
            </div>
            <div className={FooterCss.footer_social}>
                <i className="ri-facebook-fill"></i>
                <i className="ri-twitter-fill"></i>
                <i className="ri-linkedin-fill"></i>
                <i className="ri-google-fill"></i>
                <i className="ri-youtube-fill"></i>
            </div>
        </section>
    );
}

export default Footer;
