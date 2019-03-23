import React from 'react';
import './Boutique.css';
import Photo from '../../images/Photo.jpg';
import Photo7 from '../../images/Photo_7.jpg';
import Photo17 from '../../images/Photo_17.jpg';

const Boutique = () => (
    <section id="section-1" className="main-section">
        <h1>BOUTIQUE</h1>
        <div className="botique-section">
            <div><img src={Photo7}/></div>
            <div><img src={Photo}/></div>
            <div><img src={Photo17}/></div>
        </div>
    </section>
)
export default Boutique;