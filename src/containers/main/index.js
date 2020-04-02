import React, { useEffect, useState, useRef } from "react";
import { TurnipGraphChart } from "../../components/TurnipGraphChart";
import { AddPriceForm } from "../../components/AddPriceForm/";
import { AddBuyPriceForm } from "../../components/AddBuyPriceForm";
import { TurnipTable } from "../../components/TurnipTable";
import { DateFilter } from "../../components/DateFilter";
import { Row, Col, Statistic, Card, PageHeader } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import "./styles.scss";

export const Main = () => {
    return (
        <>
            <Row>
                <PageHeader title="Turnip Watch" />
            </Row>
            <Row>
                <Col>
                    <Card>
                        <DateFilter />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <Statistic title="Current Price" value={87} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Statistic
                            prefix={<ArrowUpOutlined />}
                            precision={2}
                            value={1.18}
                            valueStyle={{ color: "#3f8600" }}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Card>
                        <TurnipGraphChart />
                    </Card>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={8}>
                    <Card>
                        <AddPriceForm />
                    </Card>

                    <Card>
                        <AddBuyPriceForm />
                    </Card>
                </Col>
                <Col span={16}>
                    <Card>
                        <TurnipTable />
                    </Card>
                </Col>
            </Row>
        </>
    );
};
