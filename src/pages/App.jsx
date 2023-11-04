import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function App() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const user = useAuth();

    useEffect(() => {
        if (!user.current && !user.loading) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <>
            <div className="App">
                <h1>Hello, World!</h1>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
            <button onClick={() => user.logout()}>Logout</button>
        </>
    );
}

export default App;
