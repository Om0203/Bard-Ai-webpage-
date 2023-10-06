import React from 'react'
import {Article, Brand, Cta, Feature, Navbar} from './components'
import {Footer, Blog, WhatGPT3, Header, Features} from "./containers";
import Possibility from "./containers/possibility/Possibility";
import './App.css'
import CTA from "./components/cta/CTA";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RegistrationForm from '../src/components/navbar/RegistrationForm'; // Import your RegistrationPage component
import LoginForm from '../src/components/navbar/LoginForm';

const App = () => {
    return (
            <div className="App">
                <div className="gradient__bg">
                    <Navbar/>
                    <Header/>
                </div>
                <Brand/>
                <WhatGPT3/>
                <Features/>
                <Possibility/>
                <CTA/>
                <Blog/>
                <Footer/>
            </div>

    )
}

export default App
