import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
    <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">
            <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">
            <h4>Request Early Access to Get Started</h4>
            <h1 className="gradient__text">Bard-AI:<br /> The AI that knows no bounds</h1>
            <p>Experience the future of creativity with Google Bard-AI, where innovation meets imagination. Unlock limitless possibilities, redefine creativity, and inspire the world – because with Bard-AI, your ideas know no bounds.</p>
            <h4>Request Early Access to Get Started</h4>
        </div>
    </div>
);

export default Possibility;