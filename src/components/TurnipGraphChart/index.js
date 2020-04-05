import React, { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
import { message } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import "./styles.scss";

const TurnipGraphChart = ({ priceChart, buyPrice, dateFilter }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("f")) {
            message.info("Read HELP before using this application!", 5);
            if (!localStorage.getItem("priceChart")) {
                localStorage.setItem("priceChart", JSON.stringify({}));
            }
            if (!localStorage.getItem("buyPrice")) {
                localStorage.setItem("buyPrice", JSON.stringify({}));
            }
            if (!localStorage.getItem("transaction")) {
                localStorage.setItem("transaction", JSON.stringify({}));
            }
            localStorage.setItem("f", 1);
        }

        const dateArray = [];
        for (let i = 1; i < 7; i++) {
            dateArray.push(
                moment(dateFilter, "YYYY-MM-DD")
                    .add(i, "day")
                    .format("YYYY-MM-DD")
            );
        }
        const buy = buyPrice[dateFilter];
        const newData = [];
        dateArray.forEach((date) => {
            if (date in priceChart) {
                if (priceChart[date][0] && priceChart[date][1]) {
                    newData.push({
                        date: moment(date, "YYYY-MM-DD").format("MM-DD"),
                        price: priceChart[date][0],
                        buy: buy,
                    });
                    newData.push({
                        date: moment(date, "YYYY-MM-DD").format("MM-DD"),
                        price: priceChart[date][1],
                        buy: buy,
                    });
                } else if (priceChart[date][0] && !priceChart[date][1]) {
                    newData.push({
                        date: moment(date, "YYYY-MM-DD").format("MM-DD"),
                        price: priceChart[date][0],
                        buy: buy,
                    });
                    newData.push({
                        date: moment(date, "YYYY-MM-DD").format("MM-DD"),
                        buy: buy,
                    });
                } else if (priceChart[date][1] && !priceChart[date][0]) {
                    newData.push({
                        date: moment(date, "YYYY-MM-DD").format("MM-DD"),
                        buy: buy,
                    });
                    newData.push({
                        date: moment(date, "YYYY-MM-DD").format("MM-DD"),
                        price: priceChart[date][1],
                        buy: buy,
                    });
                }
            } else {
                newData.push({
                    date: moment(date, "YYYY-MM-DD").format("MM-DD"),
                    buy: buy,
                });
                newData.push({
                    date: moment(date, "YYYY-MM-DD").format("MM-DD"),
                    buy: buy,
                });
            }
        });
        setData(newData);
    }, [priceChart, buyPrice, dateFilter]);

    return (
        <ResponsiveContainer minWidth={375} minHeight={250}>
            <LineChart data={data} margin={{ right: 50, left: 0 }}>
                <Line
                    type="linear"
                    dataKey="price"
                    stroke="#ff4757"
                    strokeWidth={1}
                />
                <Line
                    type="stepAfter"
                    dataKey="buy"
                    stroke="#2ed573"
                    strokeWidth={1}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" dy={10} interval="preserveStart" />
                <YAxis
                    domain={[
                        (dataMin) => Math.round(dataMin * 0.9),
                        (dataMax) => Math.round(dataMax * 1.1),
                    ]}
                />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        priceChart: state.priceChart,
        buyPrice: state.buyPrice,
        dateFilter: state.dateFilter,
    };
};

const connectApp = connect(mapStateToProps)(TurnipGraphChart);

export { connectApp as TurnipGraphChart };
