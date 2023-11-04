// import React from 'react';
import PropTypes from "prop-types";

function SubscriptionItem({
    subscriptionName,
    price,
    subscriptionMonth,
    subscriptionDate,
}) {
    return (
        <div className="subscriptionItemCard">
            <div className="ItemDetails">
                <h3>{subscriptionName}</h3>
                <p>
                    {subscriptionMonth}/{subscriptionDate}
                </p>
                {/* <div className="categoryTag">
                    <p>{tag}</p>
                </div> */}
            </div>
            <h3 className="priceTag">${price}</h3>
        </div>
    );
}

SubscriptionItem.propTypes = {
    subscriptionName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    subscriptionMonth: PropTypes.number.isRequired,
    subscriptionDate: PropTypes.number.isRequired,
};

export default SubscriptionItem;
