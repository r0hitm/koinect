import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "appwrite";

const AuthContext = createContext({
    current: null,
    login: () => {},
    logout: () => {},
    register: () => {},
});

/**
 * @returns {{ current: import("appwrite").models.User, login: (email: string, password: string) => Promise<void>, logout: () => Promise<void>, register: (email: string, password: string) => Promise<void> }}
 */
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

    /**
     * @param {string} email
     * @param {string} password
     * @returns {Promise<void>}
     */
    async function login(email, password) {
        const loggedIn = await account.createEmailSession(email, password);
        setUser(loggedIn);
    }

    /**
     * @returns {Promise<void>}
     */
    async function logout() {
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
            setUser(loggedIn);
        } catch (err) {
            setUser(null);
        }
    }

    // Initialize the user state on mount
    useEffect(() => {
        init();
    }, []);

    return (
        <AuthContext.Provider
            value={{ current: user, login, logout, register }}
        >
            {children}
        </AuthContext.Provider>
    );
}
