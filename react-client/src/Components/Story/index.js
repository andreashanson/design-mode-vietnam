import React from 'react';
import './Story.css';
import WhiteLogo from '../../images/logo/white.png';

const Story = (props) => (
    <section id="section-2" className="main-section">
        <h1 className="story-header">{props.header}</h1>
        <section className="story-section">
            <section className="text">
                <p>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section className="logo"><img src={WhiteLogo} alt="Logo" /></section>
        </section>
    </section>)
export default Story;