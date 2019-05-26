import React from 'react';
import './Reach.css';

const Reach = (props) => (
    <section id="section-4" className="main-section">
        <h1 className="reach-header">{props.header}</h1>
        <section className="reach-section">
            <p className="contact">
                E-mail: heybaby@en-west.com<br></br>
                Phone: +45 2961 8692
            </p>
            <p>        
                We will be delighted to hear from you. Please, no bootycalls.
            </p>
        </section>
    </section>
)
export default Reach;