import React from 'react';
import './Story.css';
import WhiteLogo from '../../images/logo/white.png';

const Story = (props) => (
    <section id="section-2" className="main-section">
        <h1 className="story-header">{props.header}</h1>
        <section className="story-section">
            <section className="text">
                <p>
                    Does it actually sound believable, when we tell you, that a shiny yellow vest with storks on,
                    fertilized from our creativity and born from a tailor in Hoi An, is the most effective conversation-
                    starter we’ve experienced? Well it is. That’s why ÉNWEST was born; to create more items that

                    makes people feel majestic yet playful. We aim to create items that encourage interactions
                    and curiosity. We aim to uplift the human interaction positively and our medium is items that
                    stand out and spreads joy. Through our vests, we encourage that women take their space and
                    celebrate their uniqueness because we believe that this act will equally make room for other
                    women to do exactly the same.
                    “Women taking space and making room”
                </p>
            </section>
            <section className="logo"><img src={WhiteLogo} alt="Logo" /></section>
        </section>
    </section>)
export default Story;