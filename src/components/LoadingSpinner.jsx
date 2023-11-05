// Loading spinner to show when the login/register/logout is happening
import Spinner from "../assets/spinner.gif";

export default function LoadingSpinner() {
    // const { loading } = useAuth();
    return (
        <div className="loadingSpinner">
            <span className="loader"></span>{" "}
            {/*This is spinner component to be added. */}
            <div className="spinner">
                <img src={Spinner} alt="Loading" />
            </div>
        </div>
    );
}
