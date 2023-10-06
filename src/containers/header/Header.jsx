import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">Let&apos;s Build Something amazing with Google Bard-AI</h1>
            <p>Experience the future of creativity with Google Bard-AI, where innovation meets imagination. Unlock limitless possibilities, redefine creativity, and inspire the world – because with Bard-AI, your ideas know no bounds.</p>

            <div className="gpt3__header-content__input">
                <input type="email" placeholder="example@gmail.com" />
                <button type="button"><a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fbard.google.com%2Fsignin%3Fcontinue%3Dhttps%3A%2F%2Fbard.google.com%2F&followup=https%3A%2F%2Fbard.google.com%2Fsignin%3Fcontinue%3Dhttps%3A%2F%2Fbard.google.com%2F&ifkv=AYZoVhdGDk-lo39l0ZqryoZWIhul_D8BHP4wgCIHl2RyePQ46vYAWjdi3j5FU_UG36dg0Rfc8EDi&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S67368620%3A1696578223244787&theme=glif" target="_blank">Get Started</a></button>
            </div>

            <div className="gpt3__header-content__people">
                <img src={people} />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img src={ai} />
        </div>
    </div>
);

export default Header;