import React, { useState, useEffect } from "react";
import { Statistic } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import "./styles.scss";

const NetEarnings = ({ transaction }) => {
    const [net, setNet] = useState(0);

    useEffect(() => {
        let sum = 0;
        Object.keys(transaction).forEach((key) => {
            transaction[key].forEach((item) => {
                sum += item[0] * (item[2] - item[1]);
            });
        });
        setNet(sum);
    }, [transaction]);

    return (
        <Statistic
            suffix={
                <img
                    width={18}
                    alt="bells"
                    src={require("../../resources/bells.png")}
                />
            }
            title="Net Earnings"
            value={net}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        transaction: state.transaction,
    };
};

const connectApp = connect(mapStateToProps)(NetEarnings);

export { connectApp as NetEarnings };
