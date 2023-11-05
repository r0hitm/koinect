// import { useLoaderData } from "react-router-dom";
import SubscriptionItem from "./SubscriptionItem";
import { useSubscriptions } from "../hooks/useSubscriptions";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import propTypes from "prop-types";

function Subscriptions() {
    // data as obtained by fetching the backend using the react-dom loader
    const subscriptions = useSubscriptions();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="subscriptionSection">
                <h2>Subscriptions</h2>
                <button
                    className="primaryButton"
                    onClick={() => setShowModal(true)}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="currentColor"
                            d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
                        />
                    </svg>
                    Add New
                </button>
            </div>

            <div className="subscriptionList">
                <div className="subscriptions">
                    {/* <h1>My Subscriptions</h1> */}
                    {subscriptions.current.map((subscription, index) => (
                        <SubscriptionItem
                            key={index}
                            subscription={subscription}
                            deleteHandler={() =>
                                subscriptions.remove(subscription.$id)
                            }
                        />
                    ))}
                </div>
            </div>
            {showModal ? (
                <NewSubscriptionModal closeFn={() => setShowModal(false)} />
            ) : null}
        </>
    );
}

function NewSubscriptionModal({ closeFn }) {
    const user = useAuth();
    const data = useSubscriptions();
    // console.log({ data });
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [startingDate, setStartingDate] = useState(
        `${new Date().getMonth() + 1}-${new Date().getDate()}`
    );
    const [frequency, setFrequency] = useState(1); // in months

    return (
        <>
            <div className="modal">
                <div className="modal__content">
                    <h2>Add New Subscription</h2>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            closeFn();
                            const [, M, D] = startingDate.split("-");
                            data.add(user.current.$id, {
                                userId: user.current.$id,
                                subscriptionName: name,
                                price: parseFloat(price),
                                subscriptionMonth: parseInt(M),
                                subscriptionDate: parseInt(D),
                                frequency: parseInt(frequency),
                            });
                            // clear form
                            setName("");
                            setPrice(0);
                            setStartingDate(
                                `${
                                    new Date().getMonth() + 1
                                }-${new Date().getDate()}`
                            );
                            setFrequency(1);
                        }}
                    >
                        <div>
                            <input
                                className="dataPlaceholder"
                                type="text"
                                placeholder="Name"
                                defaultValue={name}
                                onChange={event => setName(event.target.value)}
                                required
                                autoFocus
                            />
                        </div>
                        <div>
                            <input
                                className="dataPlaceholder"
                                type="number"
                                placeholder="Price"
                                defaultValue={price}
                                onChange={event =>
                                    setPrice(parseFloat(event.target.value))
                                }
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="dataPlaceholder"
                                type="date"
                                placeholder="Starting Date"
                                defaultValue={startingDate}
                                onChange={event =>
                                    setStartingDate(event.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="dataPlaceholder"
                                type="number"
                                placeholder="Frequency (in number of months)"
                                defaultValue={frequency}
                                onChange={event =>
                                    setFrequency(parseInt(event.target.value))
                                }
                                required
                            />
                        </div>
                        <div>
                            <button
                                className="loginBtn primaryButton"
                                type="submit"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                    <a
                        href="#"
                        className="modal__close"
                        onClick={() => closeFn()}
                    >
                        &times;
                    </a>
                </div>
            </div>
        </>
    );
}

NewSubscriptionModal.propTypes = {
    closeFn: propTypes.func.isRequired,
};

export default Subscriptions;
