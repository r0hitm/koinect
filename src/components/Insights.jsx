// Component that displays total number of subscriptions, this month's expenditure
// budget and upcoming subscription payments
import { useEffect, useState } from "react";
import { useSubscriptions } from "../hooks/useSubscriptions";
// import { useAuth } from "../hooks/useAuth";

export default function Insights() {
    const subscriptions = useSubscriptions();

    const [subsCount, setSubsCount] = useState(0);
    const [totalExpenditure, setTotalExpenditure] = useState(0);
    const [upcomingPayments, setUpcomingPayments] = useState(0);
    const [thisMonthExpenditure, setThisMonthExpenditure] = useState(0);

    useEffect(() => {
        if (subscriptions.current) {
            setSubsCount(subscriptions.current.length);
            let total = 0;
            subscriptions.current.forEach(sub => {
                total += sub.price;
            });
            setTotalExpenditure(total);
        }

        const thisMonth = new Date().getMonth();
        const thisDate = new Date().getDate();

        subscriptions.current.forEach(sub => {
            if (sub.subscriptionMonth === thisMonth) {
                if (sub.subscriptionDate > thisDate) {
                    setUpcomingPayments(up => up + sub.price);
                }
                setThisMonthExpenditure(ex => ex + sub.price);
            }
        });
    }, [subscriptions]);

    return (
        <div className="insightsSection">
            <h2>Insights</h2>
            <div className="insightsFlexBox">

                <div className="upperBox">
                    <div className="insightsFlexItem">
                        <h1>{subsCount}</h1>
                        <span className="insightSubtitles" >Subscriptions</span>
                    </div>
                    <div className="insightsFlexItem">
                        <h1>{totalExpenditure}</h1>
                        <span className="insightSubtitles" >Total Expenditure</span>
                    </div>
                </div>

            <div className="lowerBox">
                <div className="insightsFlexItem">
                    <h1>{thisMonthExpenditure}</h1>
                    <span className="insightSubtitles" >This Month&apos;s Expenditure</span>
                </div>
                <div className="insightsFlexItem">
                    <h1>{upcomingPayments}</h1>
                    <span className="insightSubtitles" >Payments Due this month</span>
                </div>
                </div>

            </div>
        </div>
    );
}
