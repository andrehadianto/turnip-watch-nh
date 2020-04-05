import React from "react";
import moment from "moment";
import { List, Col, Typography, Avatar } from "antd";
import { connect } from "react-redux";
import "./styles.scss";

const TransactionHistory = ({ transaction }) => {
    return (
        <>
            {Object.keys(transaction).map((date) => {
                const data = [];
                transaction[date].forEach((item) => {
                    data.push({
                        quantity: item[0],
                        buy: item[1],
                        sell: item[2],
                    });
                });
                console.log(data);
                return (
                    <List
                        style={{ alignItems: "start" }}
                        header={moment(date, "YYYY-MM-DD").format(
                            "dddd, MMMM Do YYYY"
                        )}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item
                                actions={[
                                    item.buy ? (
                                        <Typography.Text
                                            style={{ color: "#ff4757" }}
                                        >
                                            -{item.quantity * item.buy}
                                        </Typography.Text>
                                    ) : (
                                        <Typography.Text
                                            style={{ color: "#2ed673" }}
                                        >
                                            +{item.quantity * item.sell}
                                        </Typography.Text>
                                    ),
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={
                                        item.buy ? (
                                            <Avatar
                                                src={require("../../resources/expense.png")}
                                            />
                                        ) : (
                                            <Avatar
                                                src={require("../../resources/earnings.png")}
                                            />
                                        )
                                    }
                                    title={
                                        item.buy
                                            ? item.buy + " bells"
                                            : item.sell + " bells"
                                    }
                                    description={
                                        item.buy
                                            ? "bought " +
                                              item.quantity +
                                              " turnips"
                                            : "sold " +
                                              item.quantity +
                                              " turnips"
                                    }
                                />
                            </List.Item>
                        )}
                    />
                );
            })}
        </>
    );
};

const mapStateToProps = (state) => {
    return { transaction: state.transaction };
};

const connectApp = connect(mapStateToProps)(TransactionHistory);

export { connectApp as TransactionHistory };
