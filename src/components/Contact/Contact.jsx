import React from "react";
import ContactCss from './../Contact/Contact.module.css'

function Contact() {
    return (
        <section className={ContactCss.contact}>
            <div className={ContactCss.contact_head}>
                <h1>Contact Us</h1>
                <div className={ContactCss.contact_head_text}>
                    <div className={ContactCss.line}></div>
                    <h1>HAVE A PROJECT</h1>
                </div>
            </div>
            <div className={ContactCss.contact_container}>
                <div className={ContactCss.Contact_form}>
                    <div className={ContactCss.Contact_form_head}>
                        <h2>WHAT CAN WE DO FOR YOU?</h2>
                        <div className={ContactCss.Contact_btns}>
                            <button className={ContactCss.Contact_btn}>Design</button>
                            <button className={ContactCss.Contact_btn}>Development</button>
                            <button className={ContactCss.Contact_btn}>Animation</button>
                            <button className={ContactCss.Contact_btn}>Other</button>
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
                        <button> Working with us
                            <i className={'ri-arrow-right-line'}></i>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className={ContactCss.Contact_content}>
                    <p>Driven by innovation and creativity, we're constantly evolving and expanding our platform to bring you the latest and greatest in gaming. From exciting new releases to classic favorites.</p>
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