import { useAuth } from "../hooks/useAuth";

function AppHeader() {
    const user = useAuth();
    return (
        <header>
            <div className="header">
                <div className="logoWithText">
                    <h2 className="logoName">Expense Tracker</h2>
                </div>

                {user.current ? (
                    <button
                        className="primaryButton logoutButton"
                        onClick={() => user.logout()}
                    >
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
                ) : null}
            </div>
        </header>
    );
}

export default AppHeader;
