import { createContext, useContext, useEffect, useState } from "react";
import { DATABASE_ID, USER_BUDGET_ID } from "../lib/appwrite_id";
import { databases } from "../lib/appwrite";
import { useAuth } from "./useAuth";
import PropTypes from "prop-types";
import { Query } from "appwrite";

const BudgetContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useBudget() {
    return useContext(BudgetContext);
}

export function BudgetProvider(props) {
    const [budget, setBudget] = useState(0);
    const [loading, setLoading] = useState(true);
    const user = useAuth();

    async function updateBudget(budget) {
        const response = await databases.listDocuments(
            DATABASE_ID,
            USER_BUDGET_ID,
            [Query.equal("userId", user.current ? user.current.$id : "")]
        );

        if (response.documents.length === 0) {
            try {
                const response = await databases.createDocument(
                    DATABASE_ID,
                    USER_BUDGET_ID,
                    user.current.$id,
                    { userId: user.current.$id, Budget: budget }
                );
                setBudget(response.budget);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        } else {
            const response = await databases.updateDocument(
                DATABASE_ID,
                USER_BUDGET_ID,
                user.current.$id,
                { userId: user.current.$id, Budget: budget }
            );
            setBudget(response.budget);
            setLoading(false);
        }
    }

    async function init() {
        const response = await databases.listDocuments(
            DATABASE_ID,
            USER_BUDGET_ID,
            [Query.equal("userId", user.current ? user.current.$id : "")]
        );

        if (response.documents.length > 0) {
            const response = await databases.updateDocument(
                DATABASE_ID,
                USER_BUDGET_ID,
                user.current.$id,
                { userId: user.current.$id, Budget: budget }
            );
            setBudget(response.budget);
        }
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <BudgetContext.Provider value={{ current: budget, updateBudget }}>
            {props.children}
        </BudgetContext.Provider>
    );
}

BudgetProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
