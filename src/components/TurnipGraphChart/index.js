import React, { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";
import moment from "moment";
import { connect } from "react-redux";
import "./styles.scss";

const TurnipGraphChart = ({ priceChart, buyPrice, dateFilter }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let dateArray = [];
        for (let i = 1; i < 7; i++) {
            dateArray.push(
                moment(dateFilter, "YYYY-MM-DD")
                    .add(i, "day")
                    .format("YYYY-MM-DD")
            );
        }
        const buy = buyPrice[dateFilter];
        let newData = [];
        dateArray.forEach(date => {
            if (date in priceChart) {
                if (priceChart[date][0] && priceChart[date][1]) {
                    newData.push({
                        name: date,
                        price: priceChart[date][0],
                        buy: buy
                    });
                    newData.push({
                        name: date,
                        price: priceChart[date][1],
                        buy: buy
                    });
                } else if (priceChart[date][0] && !priceChart[date][1]) {
                    newData.push({
                        name: date,
                        price: priceChart[date][0],
                        buy: buy
                    });
                    newData.push({
                        name: date,
                        buy: buy
                    });
                } else if (priceChart[date][1] && !priceChart[date][0]) {
                    newData.push({
                        name: date,
                        buy: buy
                    });
                    newData.push({
                        name: date,
                        price: priceChart[date][1],
                        buy: buy
                    });
                }
            } else {
                newData.push({ name: date, buy: buy });
                newData.push({ name: date, buy: buy });
            }
        });
        setData(newData);
    }, [priceChart, buyPrice, dateFilter]);

    return (
        <ResponsiveContainer minWidth={640} minHeight={480}>
            <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
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
                <XAxis dataKey="name" />
                <YAxis
                    domain={[
                        dataMin => Math.round(dataMin * 0.9),
                        dataMax => Math.round(dataMax * 1.1)
                    ]}
                />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
};

const mapStateToProps = state => {
    return {
        priceChart: state.priceChart,
        buyPrice: state.buyPrice,
        dateFilter: state.dateFilter
    };
};

const connectApp = connect(mapStateToProps)(TurnipGraphChart);

export { connectApp as TurnipGraphChart };
