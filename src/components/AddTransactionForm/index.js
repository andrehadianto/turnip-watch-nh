import React from "react";
import { Form, Row, Col, DatePicker, Button, InputNumber } from "antd";
import { connect } from "react-redux";
import "./styles.scss";

const AddTransactionForm = ({ dispatch }) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        const date = values["date-picker"].format("YYYY-MM-DD");
        const quantity = values["quantity"];
        const buyPrice = values["buy-price"];
        const sellPrice = values["sell-price"];
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                date: date,
                quantity: quantity,
                buyPrice: buyPrice,
                sellPrice: sellPrice
            }
        });
    };

    return (
        <Form from={form} name="transaction-form" onFinish={onFinish}>
            <Row>
                <Col span={24}>
                    <Form.Item name="date-picker" rule={[{ required: true }]}>
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item name="quantity" rule={[{ required: true }]}>
                        <InputNumber
                            placeholder="Quantity of turnip sold"
                            min={0}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item name="buy-price" rule={[{ required: true }]}>
                        <InputNumber
                            placeholder="Buying price per turnip"
                            min={0}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item name="sell-price" rule={[{ required: true }]}>
                        <InputNumber
                            placeholder="Selling price per turnip"
                            min={0}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

const mapStateToProps = state => {
    return { priceChart: state.priceChart };
};

const mapDispatchToProps = dispatch => {
    return { dispatch };
};

const connectApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTransactionForm);

export { connectApp as AddTransactionForm };
