import React from 'react';
import CopyrightCss from './../Copyright/Copyright.module.css'


function Copyright() {
    return(
        <section className={CopyrightCss.copyright}>
            <p>Copyright 2024. All Right Reserved By <a href="#">Code Metech</a></p>
        </section>
    );
}

export default Copyright;