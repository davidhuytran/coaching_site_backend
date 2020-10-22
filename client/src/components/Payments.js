import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function Payment() {
    return (
        <StripeCheckout 
            amount={999}
            token={token => console.log(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        />
    )
};