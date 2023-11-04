import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import AppHeader from "../components/AppHeader";

function Register() {
    const user = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.loading && user.current) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleRegister = event => {
        event.preventDefault();
        setLoading(true);
        if (password !== confirm) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }
        user.register(email, password)
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
            <AppHeader />
           <div className="loginForm">
           <h1>Get Started</h1>
            <p>Manage your subscriptions with ease.</p>
            <br />
            <form onSubmit={handleRegister}>
                <div>
                    <input className="dataPlaceholder"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <input className="dataPlaceholder" type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} required />
                </div>
                <div>
                    <input className="dataPlaceholder"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={event => setConfirm(event.target.value)}
                        required
                    />
                </div>
                {error && <p>{error}</p>}
                <div>
                    <button className="loginBtn primaryButton" type="submit" disabled={loading}>
                        Create Account
                    </button>
                </div>
                <div>Already have an account? <Link to="/login">Login here</Link></div>
            </form>
           </div>
        </section>
    );
}

export default Register;
