import React from "react";
import moment from "moment";
import { List, Typography, Avatar, Button } from "antd";
import { connect } from "react-redux";
import "./styles.scss";

const TransactionHistory = ({ transaction, dispatch }) => {
    const onDelete = (data) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: {
                date: data.date,
                quantity: data.quantity,
                buy: data.buy,
                sell: data.sell,
            },
        });
    };

    return (
        <>
            {Object.keys(transaction).map((date) => {
                const data = [];
                transaction[date].forEach((item) => {
                    data.push({
                        date: date,
                        quantity: item[0],
                        buy: item[1],
                        sell: item[2],
                    });
                });
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
                                    <Button
                                        type="link"
                                        onClick={() => onDelete(item)}
                                    >
                                        Delete
                                    </Button>,
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
                                {item.buy ? (
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
                                )}
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

const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};

const connectApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionHistory);

export { connectApp as TransactionHistory };
