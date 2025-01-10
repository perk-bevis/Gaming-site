import React from "react";
import ContactCss from './../Contact/Contact.module.css'

function Contact() {
    return (
        <section className={ContactCss.contact}>
            <div className={ContactCss.contact_head}>
                <h1>Liên hệ với chúng tôi</h1>
                <div className={ContactCss.contact_head_text}>
                    <div className={ContactCss.line}></div>
                    <h1>HAVE A PROJECT</h1>
                </div>
            </div>
            <div className={ContactCss.contact_container}>
                <div className={ContactCss.Contact_form}>
                    <div className={ContactCss.Contact_form_head}>
                        <h2>CHÚNG TÔI CÓ THỂ LÀM GÌ CHO BẠN?</h2>
                        <div className={ContactCss.Contact_btns}>
                            <button className={ContactCss.Contact_btn}>Thiết kế</button>
                            <button className={ContactCss.Contact_btn}>Phát triển</button>
                            <button className={ContactCss.Contact_btn}>Hoạt hình</button>
                            <button className={ContactCss.Contact_btn}>Khác</button>
                        </div>
                    </div>
                    <div className={ContactCss.contact_inputs}>
                        <div className={ContactCss.contact_inputs_head}>
                            <div className={ContactCss.inputs_btn}>
                                <div className={ContactCss.inputs}>
                                    <input type="text" placeholder="Your name" />
                                    <i className="ri-user-3-line"></i>
                                </div>
                                <div className={ContactCss.inputs}>
                                    <input type="text" placeholder="Your E-mail" />
                                    <i className="ri-mail-open-line"></i>
                                </div>
                            </div>
                            <div className={ContactCss.textarea}>
                                <textarea name="" id="" placeholder="Project Details"></textarea>
                                <i className="ri-pencil-fill"></i>
                            </div>
                        </div>
                        <button> Làm việc với chúng tôi
                            <i className={'ri-arrow-right-line'}></i>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className={ContactCss.Contact_content}>
                    <p>Được thúc đẩy bởi sự đổi mới và sáng tạo, chúng tôi không ngừng phát triển và mở rộng nền tảng của mình để mang đến cho bạn những trò chơi mới nhất và tuyệt vời nhất. Từ các bản phát hành mới thú vị đến các bản phát hành cổ điển được yêu thích.</p>
                    <div className={ContactCss.socials}>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-twitter-fill"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-google-fill"></i>
                        <i className="ri-github-fill"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact