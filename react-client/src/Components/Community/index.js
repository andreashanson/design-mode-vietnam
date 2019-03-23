import React from 'react';
import './Community.css';
import Image from '../../images/Photo.jpg';

const Community = (props) => (
    <section id="section-3" className="main-section">
        <h1 className="community-header">{props.header}</h1>
        <img className="community-image" src={Image} />
    </section>
)
export default Community;