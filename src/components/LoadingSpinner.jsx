// Loading spinner to show when the login/register/logout is happening
// import { useAuth } from "../hooks/useAuth";

export default function LoadingSpinner() {
    // const { loading } = useAuth();
    return (
        <div className="loadingSpinner">
            <span className="loader"></span>{" "}
            {/*This is spinner component to be added. */}
            <div className="spinner"></div>
        </div>
    );
}
