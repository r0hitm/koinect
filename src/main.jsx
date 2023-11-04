import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App.jsx";
import "./styles/index.css";
import { AuthProvider } from "./hooks/useAuth.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import { loadSubscriptionList } from "./util/loaders.js";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            loader: loadSubscriptionList,
            // errorPage: // component  to render when error (see below)
            // children: [/* nested routes */], // to render use <Outlet /> in <App />
        },
        {
            path: "/login",
            element: <Login />,
            // ....
        },
        {
            path: "/register",
            element: <Register />,
            // ....
        },
        // ... rest of the routes
    ]
    // basename: "/<REPO>" // if not being deployed to root of the website
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
