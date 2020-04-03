import React from "react";
import { TurnipGraphChart } from "../../components/TurnipGraphChart";
import { AddPriceForm } from "../../components/AddPriceForm/";
import { AddBuyPriceForm } from "../../components/AddBuyPriceForm";
import { TurnipTable } from "../../components/TurnipTable";
import { DateFilter } from "../../components/DateFilter";
import { Row, Col, Typography, Card, PageHeader, Space, Divider } from "antd";

import "./styles.scss";
import { RecordState } from "../../components/RecordState";

export const Main = () => {
    return (
        <div className="body">
            <Row>
                <PageHeader title="Turnip Stalk Market" />
            </Row>
            <Row align="middle" justify="end">
                <Col>
                    <Card bordered={false}>
                        <RecordState />
                    </Card>
                </Col>
                <Col>
                    <Card bordered={false}>
                        <Typography.Text>Date Filter: </Typography.Text>
                        <DateFilter />
                    </Card>
                </Col>
                {/* <Col span={4}>
                    <Card bordered={false}>
                        <Statistic
                            title="Current Price"
                            value={87}
                            suffix={
                                <Statistic
                                    prefix={<ArrowUpOutlined />}
                                    precision={2}
                                    value={1.18}
                                    valueStyle={{
                                        color: "#3f8600",
                                        fontSize: "12px"
                                    }}
                                    suffix="%"
                                />
                            }
                        />
                    </Card>
                </Col> */}
            </Row>
            <Row gutter={[0, 16]}>
                <Col span={24}>
                    <Card bordered={false}>
                        <TurnipGraphChart />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 0]}>
                <Col span={8} style={{ justifyContent: "space-between" }}>
                    {/* <Space direction="vertical" style={{ width: "100%" }}> */}
                    <Card title="Add Turnip Selling Price">
                        <AddPriceForm />
                    </Card>
                    <Divider style={{ margin: "5px 0px" }} />
                    <Card title="Add Turnip Buying Price">
                        <AddBuyPriceForm />
                    </Card>
                    {/* </Space> */}
                </Col>
                <Col span={16}>
                    <Card>
                        <TurnipTable />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card>
                        <TurnipTable />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
