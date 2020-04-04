import React, { useState } from "react";
import { TurnipGraphChart } from "../../components/TurnipGraphChart";
import { TurnipTable } from "../../components/TurnipTable";
import { DateFilter } from "../../components/DateFilter";
import { RecordState } from "../../components/RecordState";
import { ReportGraph } from "../../components/ReportGraph";
import { AddModal } from "../../components/AddModal";
import { Row, Col, Typography, Card, PageHeader, Switch } from "antd";

import "./styles.scss";
import { Help } from "../../components/Help";
import { NetEarnings } from "../../components/NetEarnings";
import { TransactionHistory } from "../../components/TransactionHistory";

export const Main = () => {
    const [view, setView] = useState(false);
    return (
        <div className="body">
            <Row>
                <PageHeader
                    title="Turnip Stalk Market"
                    subTitle="Online tool to manage your stalk market on the go!"
                    className="site-page-header-responsive"
                    style={{ width: "100%" }}
                    avatar={{
                        shape: "square",
                        size: "large",
                        src: require("../../resources/daisy-mae-avatar-greyonart.png"),
                    }}
                />
            </Row>
            <Row align="middle" justify="space-between">
                <Col>
                    <Card
                        size="small"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.0)",
                            border: 0,
                        }}
                        headStyle={{
                            backgroundColor: "rgba(255, 255, 255, 0.4)",
                            border: 0,
                        }}
                        bodyStyle={{
                            backgroundColor: "rgba(255, 255, 255, 0.0)",
                            border: 0,
                        }}
                        bordered={false}
                    >
                        <Help />
                    </Card>
                </Col>
                <Col>
                    <Card
                        size="small"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.0)",
                            border: 0,
                        }}
                        headStyle={{
                            backgroundColor: "rgba(255, 255, 255, 0.4)",
                            border: 0,
                        }}
                        bodyStyle={{
                            backgroundColor: "rgba(255, 255, 255, 0.0)",
                            border: 0,
                        }}
                        bordered={false}
                    >
                        <Typography.Text>View: </Typography.Text>
                        <Switch
                            onChange={(checked) => setView(checked)}
                            size="default"
                            checkedChildren="Earnings"
                            unCheckedChildren="Stalk Market"
                        />
                    </Card>
                </Col>
                <Col>
                    <Card
                        size="small"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.0)",
                            border: 0,
                        }}
                        headStyle={{
                            backgroundColor: "rgba(255, 255, 255, 0.4)",
                            border: 0,
                        }}
                        bodyStyle={{
                            backgroundColor: "rgba(255, 255, 255, 0.0)",
                            border: 0,
                        }}
                        bordered={false}
                    >
                        <AddModal />
                    </Card>
                </Col>
                <Col>
                    <Card
                        size="small"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.0)",
                            border: 0,
                        }}
                        headStyle={{
                            backgroundColor: "rgba(255, 255, 255, 0.4)",
                            border: 0,
                        }}
                        bodyStyle={{
                            backgroundColor: "rgba(255, 255, 255, 0.0)",
                            border: 0,
                        }}
                        bordered={false}
                    >
                        <RecordState />
                    </Card>
                </Col>
                {view ? null : (
                    <Col>
                        <Card
                            size="small"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.0)",
                                border: 0,
                            }}
                            headStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.4)",
                                border: 0,
                            }}
                            bodyStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.0)",
                                border: 0,
                            }}
                            bordered={false}
                        >
                            <Typography.Text>Date Filter: </Typography.Text>
                            <DateFilter />
                        </Card>
                    </Col>
                )}
            </Row>
            {view ? (
                <>
                    <Row>
                        <Col span={24} align="center">
                            <Card
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.0)",
                                    border: 0,
                                }}
                                headStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                                    border: 0,
                                }}
                                bodyStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                    border: 0,
                                    padding: "24px 0px",
                                }}
                                bordered={false}
                            >
                                <NetEarnings />
                                <ReportGraph />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} align="center">
                            <Card
                                title="Transaction History"
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.0)",
                                    border: 0,
                                }}
                                headStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                                    border: 0,
                                }}
                                bodyStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                                    border: 0,
                                    padding: "24px 12px",
                                }}
                                bordered={false}
                            >
                                <TransactionHistory />
                            </Card>
                        </Col>
                    </Row>
                </>
            ) : (
                <>
                    <Row>
                        <Col span={24}>
                            <Card
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.0)",
                                    border: 0,
                                }}
                                headStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                                    border: 0,
                                }}
                                bodyStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                    border: 0,
                                    padding: "24px 0px",
                                }}
                                bordered={false}
                            >
                                <TurnipGraphChart />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Card
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.0)",
                                    border: 0,
                                }}
                                headStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                                    border: 0,
                                }}
                                bodyStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.0)",
                                    border: 0,
                                }}
                                bordered={false}
                            >
                                <TurnipTable />
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </div>
    );
};
