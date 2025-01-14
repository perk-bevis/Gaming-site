import React from "react";
import MissionCss from './../Mission/Mission.module.css'
import skullImg from './../../assets/skull-icon3.png'
function Mission(){
    return(
        <section className={MissionCss.our_mission}>
            <div className={MissionCss.mission_head}>
                <div className={MissionCss.skullImg}>
                    <img src={skullImg} alt="" />
                </div>
                <h2 className={MissionCss.mission_content}>OUR MISSION IS TO CREATE A VIBRANT AND INCLUSIVE GAMING COMMUNITY</h2>
            </div>
            <div className={MissionCss.Mission_infos}>
                <div className={MissionCss.info_box}>
                    <h1>370+</h1>
                    <h2>Tạo và tối ưu hóa trang web</h2>
                </div>
                <div className={MissionCss.info_box}>
                    <h1>10+</h1>
                    <h2>Nhận thức và nhận diện thương hiệu</h2>
                </div>
                <div className={MissionCss.info_box}>
                    <h1>4X</h1>
                    <h2>Đo lường và phân tích hiệu suất</h2>
                </div>
                <div className={MissionCss.info_box}>
                    <h1>50%</h1>
                    <h2>Tăng chuyển đổi và doanh số bán hàng</h2>
                </div>
            </div>
        </section>
    );
}

export default  Mission
