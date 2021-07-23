import React from 'react';
import './css/About.css'

function About() {
    return (
        <div class="row d-flex justify-content-between">
            <div class="col-lg-7 d-flex justify-content-center">
                <div class="col-12 d-flex introduction justify-content-center flex-column">
                    <h1 id="intro-text">Hey, I'm Kirubanand R.</h1>
                    <p id="intro-desc">
                        A coding sophomore! I develop Web and Android apps, and also
                        contribute to Open Source.
                    </p>
                </div>
            </div>
            <div class="col-lg-4 d-flex justify-content-center">
                <div class="col-12 test img-fluid"></div>
            </div>
        </div>
    );
}

export default About;