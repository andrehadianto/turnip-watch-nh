import React, { useEffect, useState } from "react";
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceLine,
    Bar,
    Cell,
    ResponsiveContainer
} from "recharts";
import moment from "moment";
import { connect } from "react-redux";
import "./styles.scss";

const ReportGraph = ({ transaction }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const dateArray = [];
        for (let i = 0; i < 28; i++) {
            dateArray.push(
                moment()
                    .startOf("week")
                    .add(-21, "day")
                    .add(i, "day")
                    .format("YYYY-MM-DD")
            );
        }
        const newData = [];
        let sum = 0;
        dateArray.forEach((day, index) => {
            if (day in transaction) {
                transaction[day].forEach(txn => {
                    sum += txn[0] * (txn[2] - txn[1]);
                });
            }
            if ((index + 1) % 7 === 0) {
                newData.push({
                    date:
                        moment(day, "YYYY-MM-DD")
                            .startOf("week")
                            .format("MM-DD") +
                        " to " +
                        moment(day, "YYYY-MM-DD")
                            .startOf("week")
                            .add(6, "day")
                            .format("MM-DD"),
                    sum: sum
                });
                sum = 0;
            }
        });
        setData(newData);
    }, [transaction]);

    return (
        <ResponsiveContainer minWidth={375} minHeight={200}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis
                    domain={[
                        dataMin => Math.round(dataMin * 1.1),
                        dataMax => Math.round(dataMax * 1.1)
                    ]}
                />
                <Tooltip />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="sum">
                    {data.map((entry, index) => (
                        <Cell
                            key={index}
                            fill={entry.sum >= 0 ? "#2ed573" : "#ff4757"}
                        />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

const mapStateToProps = state => {
    return {
        transaction: state.transaction
    };
};

const connectApp = connect(mapStateToProps)(ReportGraph);

export { connectApp as ReportGraph };
