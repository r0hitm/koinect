import { useLoaderData } from "react-router-dom";
import SubscriptionItem from "./SubscriptionItem";
import { addSubscription } from "../lib/appwrite_db";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

function Subscriptions() {
    // data as obtained by fetching the backend using the react-dom loader
    const subscriptions = useLoaderData();
    // const user = useAuth();

    return (
        <>
            <div className="subscriptionSection">
                <h2>Subscriptions</h2>
                <button className="primaryButton">
                    <svg
                        width="24"
                        height="24"
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
                    {subscriptions.map((subscription, index) => (
                        <SubscriptionItem key={index} {...subscription} />
                    ))}
                </div>
            </div>
            <NewSubscriptionModal />
        </>
    );
}

function NewSubscriptionModal() {
    const user = useAuth();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [tag, setTag] = useState(""); // optional
    // set current month and date as "MM-DD"
    const [startingDate, setStartingDate] = useState(
        `${new Date().getMonth() + 1}-${new Date().getDate()}`
    );
    const [frequency, setFrequency] = useState(1); // in months

    return (
        <div className="modal">
            <div className="modalContent">
                <div className="modalHeader">
                    <h2>Add New Subscription</h2>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            addSubscription(user.current, {
                                name,
                                price,
                                tag,
                                startingDate,
                                frequency, // in months
                            });
                            console.log("New Subscription request submitted", {
                                name,
                                price,
                                tag,
                                startingDate,
                                frequency, // in months)
                            });
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
                                type="text"
                                placeholder="Tag"
                                defaultValue={tag}
                                onChange={event => setTag(event.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="dataPlaceholder"
                                type="date"
                                placeholder="Starting Date"
                                defaultValue={startingDate}
                                onChange={event => {
                                    const [, M, D] =
                                        event.target.value.split("-");
                                    // console.log("M", M, "D", D);
                                    setStartingDate(`${M}-${D}`);
                                }}
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
                </div>
            </div>
        </div>
    );
}

export default Subscriptions;
