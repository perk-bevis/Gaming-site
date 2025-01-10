import React, { useRef } from 'react';
import NavCss from './../Nav/Nav.module.css'
function Nav(){

    const menubar = useRef();

    const openMenu = () =>{
        menubar.current.classList.toggle(NavCss.openMenu)
    }
    return (
        <div className={NavCss.nav}>
            <div className={NavCss.menu} ref={menubar}>
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">giới thiệu</a></li>
                <li><a href="#">dự án</a></li>
                <li><a href="#">Highlights</a></li>
                <li><a href="#">liên hệ</a></li>
            </div>
            <div className={NavCss.bars}>
                <i className={`${NavCss.nav_icon} ri-menu-2-fill`} onClick={openMenu}></i>
            </div>
            <div className={NavCss.logo}>
                <a href="#">ZOX<span>NEVA</span></a>
            </div>
            <div className={NavCss.right_menu}>
                <h2>INFO@EXAPLE</h2>
                <div className={NavCss.nav_icon}>
                    <i className={`${NavCss.nav_icon} ri-search-2-line`}></i>
                </div>
            </div>
        </div>
    )
}

export default Nav