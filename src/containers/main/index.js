import React from "react";
import { TurnipGraphChart } from "../../components/TurnipGraphChart";
import { AddPriceForm } from "../../components/AddPriceForm/";
import { AddBuyPriceForm } from "../../components/AddBuyPriceForm";
import { TurnipTable } from "../../components/TurnipTable";
import { DateFilter } from "../../components/DateFilter";
import { RecordState } from "../../components/RecordState";
import { ReportGraph } from "../../components/ReportGraph";
import { Row, Col, Typography, Card, PageHeader, Divider } from "antd";

import "./styles.scss";
import { AddTransactionForm } from "../../components/AddTransactionForm";

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
            </Row>
            <Row>
                <Col span={24}>
                    <Card bordered={false}>
                        <TurnipGraphChart />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card bordered={false}>
                        <TurnipTable />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card bordered={false} title="Profit/Loss">
                        <ReportGraph />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={8} style={{ justifyContent: "space-between" }}>
                    <Card title="Add Turnip Selling Price">
                        <AddPriceForm />
                    </Card>
                    <Divider style={{ margin: "5px 0px" }} />
                    <Card title="Add Turnip Buying Price">
                        <AddBuyPriceForm />
                    </Card>
                    <Divider style={{ margin: "5px 0px" }} />
                    <Card title="Add Transaction">
                        <AddTransactionForm />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
