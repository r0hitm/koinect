import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

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
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
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
                <div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={event => setConfirm(event.target.value)}
                        required
                    />
                </div>
                {error && <p>{error}</p>}
                <div>
                    <button className="button" type="submit" disabled={loading}>
                        Register
                    </button>
                </div>
                <div>
                    Already have an account? <Link to="/login">Login here</Link>
                </div>
            </form>
        </section>
    );
}

export default Register;
