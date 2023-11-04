// import React from 'react';
import PropTypes from 'prop-types';

function SubscriptionItem({ name, price, tag, renewal }) {
    return (
        <div className="subscriptionItemCard">
            <div className="ItemDetails">
            <h2>{name}</h2>
            <p>{renewal}</p>
            <div className="categoryTag">

            <p >{tag}</p>
            </div>

            </div>
            <h3 className="priceTag">${price}</h3>
        </div>
    );
}

SubscriptionItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    renewal: PropTypes.string.isRequired,
};

export default SubscriptionItem;