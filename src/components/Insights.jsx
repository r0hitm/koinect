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
        <div className="insights-section">
            <h2>Insights</h2>
            <div className="insights-flex-box">
                <div className="insights-flex-item">
                    <h3>Subscriptions</h3>
                    <p>{subsCount}</p>
                </div>
                <div className="insights-flex-item">
                    <h3>Total Expenditure</h3>
                    <p>{totalExpenditure}</p>
                </div>
                <div className="insights-flex-item">
                    <h3>This Month&apos;s Expenditure</h3>
                    <p>{thisMonthExpenditure}</p>
                </div>
                <div className="insights-flex-item">
                    <h3>Payments Due this month</h3>
                    <p>{upcomingPayments}</p>
                </div>
            </div>
        </div>
    );
}
