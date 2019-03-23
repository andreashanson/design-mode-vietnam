import React from 'react';
import './Boutique.css';
import Photo from '../../images/Photo.jpg';
import Photo7 from '../../images/Photo_7.jpg';
import Photo17 from '../../images/Photo_17.jpg';
import BlackLogo from '../../images/logo/black.png';
import WhiteLogo from '../../images/logo/white.png';

const Boutique = () => (
    <section id="section-1" className="main-section">
        <h1>BOUTIQUE</h1>
        <div className="botique-section">
            <div><img src={Photo7}/></div>
            <div><img src={Photo}/></div>
            <div>
                <img src={Photo17}/>
                <div className="logo"><img src={WhiteLogo} /></div>
            </div>
        </div>
    </section>
)
export default Boutique;