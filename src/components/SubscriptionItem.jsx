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
  <div className="flex">
  <h3 className="priceTag">${price}</h3>

<div className="dropdown">
 <svg  className="buttonSVG" width="20" height="20" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fill-rule="evenodd" d="M8.625 2.5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0Zm0 5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0ZM7.5 13.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd"/>
</svg>
  <div className="dropdown-content">
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
</svg>Delete

  </div>
</div>
  </div>
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
