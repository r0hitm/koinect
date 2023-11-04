import { useState } from "react";
import { useAuth } from "./hooks/useAuth";

function App() {
    const [count, setCount] = useState(0);
    const user = useAuth();

    return user.current ? (
        <div className="App">
            <h1>Hello, World!</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    ) : (
        <p>Not authenticated</p>
    );
}

export default App;
