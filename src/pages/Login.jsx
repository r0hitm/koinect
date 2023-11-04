import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Login() {
    const user = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = event => {
        event.preventDefault();
        setLoading(true);
        user.login(email, password)
            .then(() => {
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                    />
                </div>
                {error && <p>{error}</p>}
                <div>
                    <button className="button" type="submit" disabled={loading}>
                        Login
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Login;
