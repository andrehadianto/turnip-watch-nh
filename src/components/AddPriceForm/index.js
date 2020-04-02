import React from "react";
import { Row, Col, Form, Input, DatePicker } from "antd";
import "./styles.scss";

export const AddPriceForm = () => {
  return (
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
  );
};
