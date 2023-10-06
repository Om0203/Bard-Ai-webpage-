import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
    {
        title: 'Natural language understanding',
        text: 'Bard can understand and respond to natural language prompts and questions. This means that you can interact with Bard in a conversational way, and it will be able to understand what you are asking.',
    },
    {
        title: 'Multilingual support',
        text: 'Bard can generate text and translate languages in over 260 languages. This makes it a powerful tool for communication and collaboration across cultures.',
    },
    {
        title: 'Creative text generation',
        text: 'Bard can generate different creative text formats of text content, like poems, code, scripts, musical pieces, email, letters, etc. This makes it a valuable tool for writers, artists, and other creative professionals.',
    },
    {
        title: 'Informative answers',
        text: 'Bard can answer your questions in a comprehensive and informative way, even if they are complex or challenging. It can also provide summaries of factual topics, or generate different creative text formats of text content.',
    },
];

const Features = () => (
    <div className="gpt3__features section__padding" id="features">
        <div className="gpt3__features-heading">
            <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
            <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__features-container">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
);

export default Features;