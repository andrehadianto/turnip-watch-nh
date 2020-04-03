import React from "react";
import { Row, Col, Form, InputNumber, DatePicker, Button } from "antd";
import { connect } from "react-redux";
import "./styles.scss";

const AddPriceForm = ({ priceChart, dispatch }) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        const date = values["date-picker"].format("YYYY-MM-DD");
        const morningPrice = values["morning-price"] || undefined
        const afternoonPrice = values["afternoon-price"] || undefined
        dispatch({
            type: "ADD_PRICE",
            payload: {date: date, morningPrice: morningPrice, afternoonPrice: afternoonPrice}
        })
    };

    return (
        <Form form={form} name="price-form" onFinish={onFinish}>
            <Row>
                <Col span={24}>
                    <Form.Item name="date-picker" rule={[{ required: true }]}>
                        <DatePicker style={{width:"100%"}} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={18}>
                    <Form.Item name="morning-price">
                        <InputNumber placeholder="BEFORE 12PM" style={{width:"95%"}} min={0}/>
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
            <Row>
                <Col span={18}>
                    <Form.Item name="afternoon-price">
                        <InputNumber placeholder="AFTER 12PM" style={{width:"95%"}} min={0}/>
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
    return { priceChart: state.priceChart };
};

const mapDispatchToProps = dispatch => {
    return { dispatch }
}

const connectApp = connect(mapStateToProps, mapDispatchToProps)(AddPriceForm);

export { connectApp as AddPriceForm };
