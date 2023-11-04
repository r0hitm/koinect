import Subscriptions from "../components/Subscriptions";

function AppBody() {
    return (
        <main>
            <div className="subscriptionSection">
                <h2>Subscriptions</h2>
                <button
                    className="primaryButton"
                    onClick={() => console.log("Add New Subscription clicked!")}
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
                    Add New
                </button>
            </div>
            <Subscriptions />
        </main>
    );
}

export default AppBody;
