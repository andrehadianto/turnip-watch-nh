import React, { useEffect, useState } from "react";
import { Table } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import "./styles.scss";

const TurnipTable = ({ priceChart, buyPrice, dateFilter }) => {
    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {
        let dateArray = [];
        for (let i = 1; i < 7; i++) {
            dateArray.push(
                moment(dateFilter, "YYYY-MM-DD")
                    .add(i, "day")
                    .format("YYYY-MM-DD")
            );
        }
        const buy = buyPrice[dateFilter] ? buyPrice[dateFilter] : "-";
        let newData = [];
        dateArray.forEach((date, index) => {
            const day = moment(date, "YYYY-MM-DD").format("dddd");
            if (date in priceChart) {
                if (priceChart[date][0] && priceChart[date][1]) {
                    newData.push({
                        key: index,
                        week: day,
                        day: priceChart[date][0],
                        afternoon: priceChart[date][1],
                        buy: buy
                    });
                } else if (priceChart[date][0] && !priceChart[date][1]) {
                    newData.push({
                        key: index,
                        week: day,
                        day: priceChart[date][0],
                        afternoon: "-",
                        buy: buy
                    });
                } else if (priceChart[date][1] && !priceChart[date][0]) {
                    newData.push({
                        key: index,

                        week: day,
                        day: "-",
                        afternoon: priceChart[date][1],
                        buy: buy
                    });
                }
            } else {
                newData.push({
                    key: index,
                    week: day,
                    day: "-",
                    afternoon: "-",
                    buy: buy
                });
            }
        });
        setDataTable(newData);
    }, [priceChart, buyPrice, dateFilter]);

    const columns = [
        { title: "Week", dataIndex: "week", key: "week" },
        { title: "Day", dataIndex: "day", key: "day" },
        { title: "Afternoon", dataIndex: "afternoon", key: "afternoon" },
        { title: "Buy", dataIndex: "buy", key: "buy" }
    ];

    return (
        <Table
            bordered
            tableLayout="auto"
            pagination={false}
            columns={columns}
            dataSource={dataTable}
        />
    );
};

const mapStateToProps = state => {
    return {
        priceChart: state.priceChart,
        buyPrice: state.buyPrice,
        dateFilter: state.dateFilter
    };
};

const connectApp = connect(mapStateToProps)(TurnipTable);

export { connectApp as TurnipTable };
