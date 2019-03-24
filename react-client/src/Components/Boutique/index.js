import React from 'react';
import './Boutique.css';
import Photo from '../../images/Photo.jpg';
import Photo7 from '../../images/Photo_7.jpg';
import Photo17 from '../../images/Photo_17.jpg';
import WhiteLogo from '../../images/logo/white.png';

const Boutique = (props) => (
    <section id="section-1" className="main-section">
        <h1 className="boutique-header">{props.header}</h1>
        <div className="boutique-section">
            <div><img src={Photo7} alt="vest1" /></div>
            <div><img src={Photo} alt="vest2" /></div>
            <div>
                <img src={Photo17} alt="vest1" />
                <div className="logo"><img src={WhiteLogo} alt="Logo" /></div>
            </div>
        </div>
    </section>
)
export default Boutique;