import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "appwrite";

const AuthContext = createContext();

/**
 * @returns {{ current: import("appwrite").models.User, login: (email: string, password: string) => Promise<void>, logout: () => Promise<void>, register: (email: string, password: string) => Promise<void> }}
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return useContext(AuthContext);
}

/**
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    /**
     * @param {string} email
     * @param {string} password
     * @returns {Promise<void>}
     */
    async function login(email, password) {
        const loggedIn = await account.createEmailSession(email, password);
        console.log("logging in. setting user to: ", loggedIn);
        setUser(loggedIn);
    }

    /**
     * @returns {Promise<void>}
     */
    async function logout() {
        console.log("logging out");
        await account.deleteSession("current");
        setUser(null);
    }

    /**
     * @param {string} email
     * @param {string} password
     * @returns {Promise<void>}
     */
    async function register(email, password) {
        await account.create(ID.unique(), email, password);
        await login(email, password);
    }

    /**
     * Initialize the user state
     * @returns {Promise<void>}
     */
    async function init() {
        try {
            const loggedIn = await account.get();
            console.log("user logged in, setting to: ", loggedIn);
            setUser(loggedIn);
        } catch (err) {
            console.log("user not logged in, setting to null. Error: ", err);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    // Initialize the user state on mount
    useEffect(() => {
        init();
    }, []);

    return (
        <AuthContext.Provider
            value={{ current: user, login, logout, register, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
}
