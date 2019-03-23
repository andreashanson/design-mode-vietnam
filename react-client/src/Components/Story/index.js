import React from 'react';
import './Story.css';
import WhiteLogo from '../../images/logo/white.png';

const Story = (props) => (
    <section id="section-2" className="main-section">
        <h1 className="story-header">{props.header}</h1>
        <section className="story-section">
            <section className="text">
                <p>ksajddfkjs</p>
            </section>
            <section className="logo"><img src={WhiteLogo} /></section>
        </section>
    </section>)
export default Story;