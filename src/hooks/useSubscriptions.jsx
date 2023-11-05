import { createContext, useContext, useEffect, useState } from "react";
import { DATABASE_ID, COLLECTION_ID } from "../lib/appwrite_id";
import { databases } from "../lib/appwrite";
import { Query, ID } from "appwrite";
import PropTypes from "prop-types";
import { useAuth } from "./useAuth";

const SubscriptionsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useSubscriptions() {
    return useContext(SubscriptionsContext);
}

export function SubscriptionsProvider(props) {
    const [subscriptions, setSubscriptions] = useState([]);
    const user = useAuth();

    async function add(userId, subscription) {
        console.log({ userId, subscription });
        const response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            subscription
        );
        setSubscriptions(subs => [response, ...subs]);
    }

    async function remove(id) {
        await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
        setSubscriptions(subs => subs.filter(sub => sub.$id !== id));
    }

    async function init(userId) {
        const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [Query.equal("userId", userId)]
        );
        console.log("query response: ", response);
        setSubscriptions(response.documents);
    }

    useEffect(() => {
        if (user.current) init(user.current.$id);
    }, [user]);

    return (
        <SubscriptionsContext.Provider
            value={{ current: subscriptions, remove, add }}
        >
            {props.children}
        </SubscriptionsContext.Provider>
    );
}

SubscriptionsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
