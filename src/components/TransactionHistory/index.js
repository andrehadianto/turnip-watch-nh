import React from "react";
import moment from 'moment';
import { List, Col } from "antd";
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
                        style={{margin: "20px 0px"}}
                        header={moment(date, "YYYY-MM-DD").format("dddd, MMMM Do YYYY")}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <Col
                                    xs={{ span: 4, offset: 1 }}
                                    sm={{ span: 2 }}
                                >
                                    {item.quantity} turnips
                                </Col>
                                <Col
                                    xs={{ span: 6, offset: 1 }}
                                    sm={{ span: 4 }}
                                >
                                    {item.buy} -> {item.sell}
                                </Col>
                                <Col>
                                    {item.quantity * (item.sell - item.buy) >= 0
                                        ? "+"
                                        : ""}
                                    {item.quantity * (item.sell - item.buy)}{" "}
                                    bells
                                </Col>
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
