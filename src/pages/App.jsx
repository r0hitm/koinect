import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AppHeader from "../components/AppHeader";
import AppBody from "../components/AppBody";
import AppFooter from "../components/AppFooter";
import PrimaryButton from "../components/PrimaryButton";

function App() {
    const navigate = useNavigate();
    const user = useAuth();

    useEffect(() => {
        if (!user.current && !user.loading) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <>
            <AppHeader />
            <AppBody />
            <AppFooter />
            <PrimaryButton />
        </>
    );
}

export default App;
