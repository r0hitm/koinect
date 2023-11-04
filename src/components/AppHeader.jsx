import { useAuth } from "../hooks/useAuth";

function AppHeader() {
    const user = useAuth();
    return (
        <header>
            <h1>App</h1>
            <button onClick={() => user.logout()}>Logout</button>
        </header>
    );
}

export default AppHeader;
