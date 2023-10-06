import React from 'react';
import gpt3Logo from '../../assets/bard.png';
import './footer.css';

const Footer = () => (
    <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>

        <div className="gpt3__footer-btn">
            <p><a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fbard.google.com%2Fsignin%3Fcontinue%3Dhttps%3A%2F%2Fbard.google.com%2F&followup=https%3A%2F%2Fbard.google.com%2Fsignin%3Fcontinue%3Dhttps%3A%2F%2Fbard.google.com%2F&ifkv=AYZoVhdGDk-lo39l0ZqryoZWIhul_D8BHP4wgCIHl2RyePQ46vYAWjdi3j5FU_UG36dg0Rfc8EDi&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S67368620%3A1696578223244787&theme=glif" target="_blank">Request Early Access</a></p>
        </div>

        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <img src={gpt3Logo} alt="gpt3_logo" />
                <p><h3>Om Patil's Bard-AI</h3> <br /> All Rights Reserved</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h2>Links</h2>
                <p><a href="https://www.linkedin.com/in/om-patil-7148a6204" target="_blank">LinkedIn</a></p>
                <p><a href="https://www.instagram.com/om.patil.0203/" target="_blank">Instagram</a></p>
                <p><a href="https://github.com/Om0203" target="_blank">Github</a></p>
            </div>
            <div className="gpt3__footer-links_div">
                <h2>Company</h2>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h2>Get in touch</h2>
                <p>Pune, Maharashtra</p>
                <p>+91-8766623535</p>
                <p><a href="mailto:ompatil36605@gmail.com.com" target="_blank">ompatil36605@gmail.com</a></p>
            </div>
        </div>

        <div className="gpt3__footer-copyright">
            <p>@2023 Bard-AI. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;