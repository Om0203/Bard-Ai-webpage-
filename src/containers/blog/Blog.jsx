import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupA">
                <Article imgUrl={blog01} date="Sep 26, 2021" text= {<a href="https://bardailogin.com/how-to-use-google-bard-ai/" target="_blank">How to use Google Bard AI: Unleash the Power of Bard AI 2023</a>} />
            </div>
            <div className="gpt3__blog-container_groupB">
                <Article imgUrl={blog02} date="Sep 26, 2021" text= {<a href="https://bardailogin.com/best-google-bard-ai-extensions/" target="_blank">Best Google Bard AI Extensions To Try (Chrome, Edge, Safari)</a>} />
                <Article imgUrl={blog03} date="Sep 26, 2021" text= {<a href="https://bardailogin.com/bard-not-suppported-country/">Bard isn’t currently supported in your country (Easily Fix)</a>} />
                <Article imgUrl={blog04} date="Sep 26, 2021" text= {<a href ="https://blog.google/technology/ai/bard-google-ai-search-updates/">An important next step on our AI journey</a>} />
                <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
        </div>
    </div>
);

export default Blog;