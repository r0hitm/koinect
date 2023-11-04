import { useLoaderData } from 'react-router-dom';
import SubscriptionItem from './SubscriptionItem';

function Subscriptions() {
    // data as obtained by fetching the backend using the react-dom loader
    const subscriptions = useLoaderData();

    return (
        <div className="subscriptions">
            {/* <h1>My Subscriptions</h1> */}
            {subscriptions.map((subscription, index) => (
                <SubscriptionItem key={index} {...subscription} />
            ))}
        </div>
    );
}

export default Subscriptions;