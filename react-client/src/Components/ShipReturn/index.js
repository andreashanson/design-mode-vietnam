import React from 'react';
import './ShipReturn.css';

const ShipReturn = (props) => (
    <section id="section-5" className="main-section">
        <h1 className="ship-return-header">{props.header}</h1>
        <section className="shipping-section">
        <h2>Shipping</h2>
        <p>
            Sales are based on pre-orders to ensure we sell what we produce. This is our way of eliminating
            waste + unsold items and and thereby keeping our production environmentally friendly. When we
            receive your order, we start the production. That means your order is made just for you. We aim to
            deliver the product to you, within three weeks of placing the order. Someone clever once said, that
            good things take time, yeah? We’ll keep you updated on the progress of your items and inform you
            when we’ve shipped your goods.
        </p>
        <h2>Returns</h2>
        <p>
            If the vest is not quite your thing, we accept returns of items in new condition for a full refund.
            Returns must take place within 14 days after receiving the item, and it must be returned to our
            studio in Copenhagen. We’ll make sure the money gets back to you, same way they got in,
            once we receive the item. We do monitor returns to identify potential misuse or abuse of our
            return policies and reserve the right to refuse service to anyone. We’ll make sure to keep you
            updated when our team has processed your refund so you know it’s on the way.            
        </p>
        <h2>Exchanges</h2>
        <p>
            If you believe you’d shine brighter in a different color than you have originally ordered, we will
            make an exchange for you, if the item is in new condition. Please get in touch with us via
            heybaby@en-west.com
        </p>
    </section>
    </section>

)
export default ShipReturn;