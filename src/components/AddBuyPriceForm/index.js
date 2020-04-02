import React from "react";
import { Row, Col, Form, InputNumber, Button, DatePicker } from "antd";
import { connect } from "react-redux";
import "./styles.scss";

const AddBuyPriceForm = ({ buyPrice, dispatch }) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        const date = values["date-picker"].startOf('week').format("YYYY-MM-DD");
        const buyingPrice = values["buy-price"];
        dispatch({
            type: "ADD_BUY_PRICE",
            payload: { date: date, buyingPrice: buyingPrice }
        });
    };
    return (
        <Form form={form} name="price-form" onFinish={onFinish}>
            <Row>
                <Col span={24}>
                    <Form.Item name="date-picker" rule={[{ required: true }]}>
                        <DatePicker picker="week" style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={18}>
                    <Form.Item name="buy-price" rule={[{ required: true }]}>
                        <InputNumber placeholder="Turnip price when bought" style={{ width: "95%" }} min={0} />
                    </Form.Item>
                </Col>
                <Col span={6}>
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
    return { buyPrice: state.buyPrice };
};

const mapDispatchToProps = dispatch => {
    return { dispatch };
};

const connectApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBuyPriceForm);

export { connectApp as AddBuyPriceForm };
