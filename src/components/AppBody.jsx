import Subscriptions from "../components/Subscriptions";
import Insights from "../components/Insights";

function AppBody() {
    return (
        <main className="roundedBG">
            <Insights />
            <hr className="divider" />
            <Subscriptions />
        </main>
    );
}

export default AppBody;
