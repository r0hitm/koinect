import { createContext, useContext, useEffect, useState } from "react";
import { DATABASE_ID, USER_BUDGET_ID } from "../lib/appwrite_id";
import { databases } from "../lib/appwrite";
import { useAuth } from "./useAuth";
import PropTypes from "prop-types";

const BudgetContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useBudget() {
    return useContext(BudgetContext);
}

export function BudgetProvider(props) {
    const [budget, setBudget] = useState(0);
    const user = useAuth();

    async function add(userId, budget) {
        console.log({ userId, budget });
        const response = await databases.createDocument(
            DATABASE_ID,
            USER_BUDGET_ID,
            userId,
            budget
        );
        setBudget(response);
    }

    async function update(userId, budget) {
        console.log({ userId, budget });
        const response = await databases.updateDocument(
            DATABASE_ID,
            USER_BUDGET_ID,
            userId,
            budget
        );
        // if unable to update, add
        if (!response) add(userId, budget);

        setBudget(response);
    }

    async function init(userId) {
        const response = await databases.getDocument(
            DATABASE_ID,
            USER_BUDGET_ID,
            userId
        );
        setBudget(response);
    }

    useEffect(() => {
        if (user.current) init(user.current.$id);
    }, [user]);

    return (
        <BudgetContext.Provider value={{ current: budget, update, add }}>
            {props.children}
        </BudgetContext.Provider>
    );
}

BudgetProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
