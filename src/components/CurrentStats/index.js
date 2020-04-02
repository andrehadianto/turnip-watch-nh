import React, { useEffect, useState } from "react";
import { Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import moment from 'moment'
import { connect } from "react-redux";
import "./styles.scss";

const CurrentStats = ({ priceChart, dateFilter }) => {
    const [isIncreasing, setIncreasing] = useState(true);
    const [val, setVal] = useState(0);

    useEffect(() => {
        const today = moment(dateFilter, "YYYY-MM-DD")
        const yesterday = today.add(-1, 'day')
        if (priceChart[today]) {
            if (priceChart[yesterday]) {
                setIncreasing(priceChart[today])
            }
        }
    }, [priceChart, dateFilter]);

    return (
        <Statistic
            title="Current Price"
            value={87}
            suffix={
                <Statistic
                    prefix={
                        isIncreasing ? (
                            <ArrowUpOutlined />
                        ) : (
                            <ArrowDownOutlined />
                        )
                    }
                    precision={2}
                    value={1.18}
                    valueStyle={
                        isIncreasing
                            ? {
                                  color: "#3f8600",
                                  fontSize: "12px"
                              }
                            : { color: "#cf1322", fontSize: "12px" }
                    }
                    suffix="%"
                />
            }
        />
    );
};

const mapStateToProps = state => {
    return { priceChart: state.priceChart, dateFilter: state.dateFilter };
};

const connectApp = connect(mapStateToProps)(CurrentStats);

export { connectApp as CurrentStats };
