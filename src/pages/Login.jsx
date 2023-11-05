import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import LoadingSpinner from "../components/LoadingSpinner";
function Login() {
    const user = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.loading && user.current) {
            navigate("/");
        }
    }, [user, navigate]);

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

    if (loading) {
        return <LoadingSpinner />;
    } else {
        return (
            <section>
                <AppHeader />
                <div className="loginForm">
                    <h1>Log into your account</h1>
                    <form onSubmit={handleLogin}>
                        <div>
                            <input
                                className="dataPlaceholder"
                                type="email"
                                placeholder="Email"
                                defaultValue={email}
                                onChange={event => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="dataPlaceholder"
                                type="password"
                                placeholder="Password"
                                defaultValue={password}
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
                                required
                            />
                        </div>
                        {error && <p>{error}</p>}
                        <div>
                            <button
                                className="loginBtn primaryButton"
                                type="submit"
                                disabled={loading}
                            >
                                Login
                            </button>
                        </div>
                        <div>
                            Don&apos;t have an account?{" "}
                            <Link to="/register">Register Here</Link>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Login;
