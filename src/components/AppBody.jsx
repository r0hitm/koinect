import Subscriptions from "../components/Subscriptions";

function AppBody() {
    return (
        <main className="">
            <div className="subscriptionSection">
                <h2>Subscriptions</h2>
                <button className="primaryButton">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"/>
</svg>Add New</button>
            </div>
            <Subscriptions />
        </main>
    );
}

export default AppBody;
