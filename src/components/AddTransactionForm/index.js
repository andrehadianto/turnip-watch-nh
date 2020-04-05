import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import {
    Form,
    Row,
    Col,
    DatePicker,
    InputNumber,
    Button,
    message,
    Radio,
} from "antd";

const AddTransactionForm = ({ dispatch }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const date = values["date-picker"].format("YYYY-MM-DD");
        const buySell = values["buy-sell-radio"];
        const quantity = values["quantity"];
        const price = values["price"];
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                date: date,
                buySell: buySell,
                quantity: quantity,
                price: price,
            },
        });
        message.success("Transaction has been added!");
        form.setFieldsValue({ price: "", quantity: "" });
    };

    return (
        <Form form={form} name="buy-transaction-form" onFinish={onFinish}>
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
                            type="number"
                            placeholder="Turnip Quantity"
                            min={0}
                            style={{ width: "50%" }}
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item name="buy-sell-radio">
                        <Radio.Group>
                            <Radio value="buy">Buy</Radio>
                            <Radio value="sell">Sell</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item name="price" rule={[{ required: true }]}>
                        <InputNumber
                            type="number"
                            placeholder="Price per turnip"
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

const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};

const connectApp = connect(mapDispatchToProps)(AddTransactionForm);

export { connectApp as AddTransactionForm };
