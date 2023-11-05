import { useAuth } from "../hooks/useAuth";

function AppHeader() {
    const user = useAuth();
    return (
        <header>
            <div className="header">
            <div className="logoWithText">
                    <svg
                        width="48"
                        height="36"
                        viewBox="0 0 64 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="48"
                            width="16"
                            height="48"
                            fill="white"
                            fillOpacity="0.01"
                        />
                        <circle cx="24" cy="25" r="24" fill="#166534" />
                        <path
                            d="M12.0338 8.43661V8.43661C15.3195 8.43661 17.9831 11.1002 17.9831 14.3859V34.9967H12.0338V8.43661Z"
                            fill="#FCFFFC"
                        />
                        <path
                            d="M29.2543 16.6918C31.4884 14.5911 35.2827 14.3872 37.7291 16.2365V16.2365L16.6977 36.0117L12.2682 32.6634L29.2543 16.6918Z"
                            fill="#FCFFFC"
                        />
                        <path
                            d="M12.0338 34.8828H17.9831L15.2113 37.1626L12.0338 39.6704V34.8828Z"
                            fill="#FCFFFC"
                        />
                        <circle
                            cx="30.1522"
                            cy="34.8028"
                            r="4.86761"
                            fill="#FCFFFC"
                        />
                    </svg>

                    <h2 className="logoName" >KoiNect</h2>
                </div>

                <button className="primaryButton logoutButton" onClick={() => user.logout()}>
                    <svg
                        className="buttonSVG"
                        width="16px" 
                        height="16px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="currentColor"
                            d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
                        />
                    </svg>
                    Logout
                </button>
            </div>
        </header>
    );
}

export default AppHeader;
