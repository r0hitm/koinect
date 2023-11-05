import Subscriptions from "../components/Subscriptions";
import Insights from "../components/Insights";

function AppBody() {
    return (
        <main className="roundedBG">
            <Insights />
            <Subscriptions />
            {/* <Graph/> */}
        </main>
    );
}

export default AppBody;
