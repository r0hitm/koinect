// Component that displays total number of subscriptions, this month's expenditure
// budget and upcoming subscription payments
import { useEffect, useState } from "react";
import { useSubscriptions } from "../hooks/useSubscriptions";
import { useBudget } from "../hooks/useBudget";

export default function Insights() {
    const subscriptions = useSubscriptions();
    const userBudget = useBudget();

    const [subsCount, setSubsCount] = useState(0);
    const [totalExpenditure, setTotalExpenditure] = useState(0);
    const [upcomingPayments, setUpcomingPayments] = useState(0);
    const [budget, setBudget] = useState();

    useEffect(() => {
        setBudget(userBudget.budget);
    }, [userBudget]);

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
                        <span className="insightSubtitles">Subscriptions</span>
                    </div>
                    <div className="insightsFlexItem">
                        <h1>₹{totalExpenditure}</h1>
                        <span className="insightSubtitles">
                            Total Expenditure
                        </span>
                    </div>
                </div>

                <div className="lowerBox">
                    <div className="insightsFlexItem">
                        <h1>{budget}</h1>
                        <span className="insightSubtitles">
                            My Budget
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                    const newBudget =
                                        prompt("Enter new budget");
                                    const parsed = parseFloat(newBudget);
                                    if (isNaN(parsed)) {
                                        alert("Invalid input");
                                        return;
                                    }
                                    if (parsed < 0) {
                                        alert("Invalid input");
                                        return;
                                    }
                                    setBudget(newBudget);
                                    userBudget.updateBudget(newBudget);
                                }}
                            >
                                <g fill="none">
                                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                                    <path
                                        fill="currentColor"
                                        d="M16.035 3.015a3 3 0 0 1 4.099-.135l.144.135l.707.707a3 3 0 0 1 .135 4.098l-.135.144L9.773 19.177a1.5 1.5 0 0 1-.562.354l-.162.047l-4.454 1.028a1.001 1.001 0 0 1-1.22-1.088l.02-.113l1.027-4.455a1.5 1.5 0 0 1 .29-.598l.111-.125L16.035 3.015Zm-.707 3.535l-8.99 8.99l-.636 2.758l2.758-.637l8.99-8.99l-2.122-2.12Zm3.536-2.121a1 1 0 0 0-1.32-.083l-.094.083l-.708.707l2.122 2.121l.707-.707a1 1 0 0 0 .083-1.32l-.083-.094l-.707-.707Z"
                                    />
                                </g>
                            </svg>
                        </span>
                    </div>
                    <div className="insightsFlexItem">
                        <h1>{upcomingPayments}</h1>
                        <span className="insightSubtitles">
                            Payments Due this month
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
