import React, { useEffect, useState, useRef } from "react";
import {
  Row,
  Col,
  Button,
  Statistic,
  Card,
  PageHeader,
  Input,
  Form,
  DatePicker,
  Table
} from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import "./App.scss";

const App = () => {
  const data = [
    { name: "Page A", price: 99, buy: 82 },
    { name: "Page A", price: 87, buy: 82 },
    { name: "Page A", price: 85, buy: 82 },
    { name: "Page A", price: 73, buy: 82 },
    { name: "Page A", price: 70, buy: 82 },
    { name: "Page A", price: 94, buy: 82 },
    { name: "Page A", price: 99, buy: 82 },
    { name: "Page A", price: 87, buy: 82 },
    { name: "Page A", price: 85, buy: 82 },
    { name: "Page A", price: 73, buy: 82 },
    { name: "Page A", price: 70, buy: 82 },
    { name: "Page A", price: 94, buy: 82 }
  ];
  
    const columns = [
      { title: "Week", dataIndex: "week", key: "week" },
      { title: "Day", dataIndex: "day", key: "day" },
      { title: "Afternoon", dataIndex: "afternoon", key: "afternoon" }
    ];

  const dataTable = [
    { key: "1", week: "Monday", day: 99, afternoon: 87 },
    { key: "2", week: "Tuesday", day: 85, afternoon: 73 },
    { key: "3", week: "Wednesday", day: 70, afternoon: 94 },
    { key: "4", week: "Thursday", day: 99, afternoon: 87 },
    { key: "5", week: "Friday", day: 85, afternoon: 73 },
    { key: "6", week: "Sunday", day: 70, afternoon: 94 }
  ];

  return (
    <>
      <Row>
        <PageHeader title="Turnip Watch" />
      </Row>
      <Row gutter={16}>
        <Col span={20}>
          <Card title="Turnip Watch">
            <ResponsiveContainer minWidth={640} minHeight={480}>
              <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line
                  type="stepAfter"
                  dataKey="price"
                  stroke="#ff4757"
                  strokeWidth={1}
                />
                <Line
                  type="stepAfter"
                  dataKey="buy"
                  stroke="#2ed573"
                  strokeWidth={1}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis
                  domain={[
                    dataMin => Math.round(dataMin * 0.9),
                    dataMax => Math.round(dataMax * 1.1)
                  ]}
                />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={4}>
          <Card>
            <Statistic title="Current Price" value={87} />
          </Card>
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

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card>
            <Form>
              <Row>
                <Form.Item>
                  <DatePicker />
                </Form.Item>
              </Row>
              <Row>
                <Col span={12}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>

          <Card>
            <Form>
              <Row>
                <Form.Item>
                  <DatePicker />
                </Form.Item>
              </Row>
              <Row>
                <Col span={12}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span={16}>
          <Card>
            <Table columns={columns} dataSource={dataTable} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default App;
