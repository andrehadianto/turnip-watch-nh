import React, { useEffect, useState, useRef } from "react";
import { TurnipGraphChart } from "../../components/TurnipGraphChart";
import { AddPriceForm } from "../../components/AddPriceForm/";
import { AddBuyPriceForm } from "../../components/AddBuyPriceForm";
import { TurnipTable } from "../../components/TurnipTable";
import { DateFilter } from "../../components/DateFilter";
import { Row, Col, Statistic, Card, PageHeader, Space } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import "./styles.scss";

export const Main = () => {
    return (
        <>
            <Row>
                <PageHeader title="Turnip Stalk Market" />
            </Row>
            <Row gutter={[16, 0]} align="middle" justify='space-around'>
                <Col>
                    <Card bordered={false}>
                        <DateFilter />
                    </Card>
                </Col>
                <Col span={4}>
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
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card bordered={false}>
                        <TurnipGraphChart />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={8}>
                    <Card title="Add Turnip Selling Price">
                        <AddPriceForm />
                    </Card>
                    <Space />
                    <Card title="Add Turnip Buying Price">
                        <AddBuyPriceForm />
                    </Card>
                </Col>
                <Col span={16}>
                    <Card bordered={false}>
                        <TurnipTable />
                    </Card>
                </Col>
            </Row>
        </>
    );
};
