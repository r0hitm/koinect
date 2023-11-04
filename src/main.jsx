import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App.jsx";
import "./styles/index.css";
import { AuthProvider } from "./hooks/useAuth.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import { SubscriptionsProvider } from "./lib/appwrite_db.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ],
    {
        basename: "/koinect/",
    }
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <SubscriptionsProvider>
                <RouterProvider router={router} />
            </SubscriptionsProvider>
        </AuthProvider>
    </React.StrictMode>
);
