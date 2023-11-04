// import React from 'react';
import PropTypes from 'prop-types';

function SubscriptionItem({ name, price, tag, renewalDate }) {
    return (
        <div className="subscription-item">
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Tag: {tag}</p>
            <p>Renewal Date: {renewalDate}</p>
        </div>
    );
}

SubscriptionItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    renewalDate: PropTypes.string.isRequired,
};

export default SubscriptionItem;