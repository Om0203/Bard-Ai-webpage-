import React from 'react';
import './cta.css';

const CTA = () => (
    <div className="gpt3__cta">
        <div className="gpt3__cta-content">
            <p>Request Early Access to Get Started</p>
            <h3>Register Today & start exploring the endless possibilities.</h3>
        </div>
        <div className="gpt3__cta-btn">
            <button type="button"><a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fbard.google.com%2Fsignin%3Fcontinue%3Dhttps%3A%2F%2Fbard.google.com%2F&followup=https%3A%2F%2Fbard.google.com%2Fsignin%3Fcontinue%3Dhttps%3A%2F%2Fbard.google.com%2F&ifkv=AYZoVhdGDk-lo39l0ZqryoZWIhul_D8BHP4wgCIHl2RyePQ46vYAWjdi3j5FU_UG36dg0Rfc8EDi&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S67368620%3A1696578223244787&theme=glif" target="_blank">Get Started</a></button>
        </div>
    </div>
);

export default CTA;