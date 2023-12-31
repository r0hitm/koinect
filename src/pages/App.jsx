import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AppHeader from "../components/AppHeader";
import AppBody from "../components/AppBody";
import AppFooter from "../components/AppFooter";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
    const navigate = useNavigate();
    const user = useAuth();

    useEffect(() => {
        if (!user.current && !user.loading) {
            navigate("/login");
        }
    }, [user, navigate]);

    return user.current ? (
        <>
            <AppHeader />
            <AppBody />
            <AppFooter />
        </>
    ) : (
        <LoadingSpinner />
    );
}

export default App;
