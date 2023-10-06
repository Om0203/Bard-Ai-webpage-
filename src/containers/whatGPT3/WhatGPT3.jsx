import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const Whatgpt3 = () => (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
            <Feature title="What is Bard-AI" text="Bard AI is a large language model chatbot developed by Google. It is trained on a massive dataset of text and code, and can generate human-like text, translate languages, write different kinds of creative content, and answer your questions in an informative way." />
        </div>
        <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
            <p>Explore the Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
            <Feature title="Chatbots" text="The most advanced conversational AI chatbot, now available to everyone." />
            <Feature title="Knowledgebase" text="Has access to a massive knowledgebase of informationto answer your questions." />
            <Feature title="Education" text="Students and Teachers can use Bard AI to learn new concepts and skills." />
        </div>
    </div>
);

export default Whatgpt3;