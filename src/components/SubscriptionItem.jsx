// import React from 'react';
import PropTypes from "prop-types";

function SubscriptionItem({ subscription, deleteHandler }) {
    return (
        <div className="subscriptionItemCard">
            <div className="ItemDetails">
                <h3>{subscription.subscriptionName}</h3>
                <p>
                    {subscription.subscriptionMonth}/
                    {subscription.subscriptionDate}
                </p>
            </div>
            <div className="flex">
                <h3 className="priceTag">₹{subscription.price}</h3>

                <div className="dropdown">
                    <svg
                        className="buttonSVG"
                        width="20"
                        height="20"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M8.625 2.5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0Zm0 5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0ZM7.5 13.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <div
                        className="dropdown-content"
                        onClick={() => deleteHandler(subscription.$id)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
                            />
                        </svg>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
}

SubscriptionItem.propTypes = {
    subscription: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired,
};

export default SubscriptionItem;
