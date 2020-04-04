import React from "react";
import { Row, Col, Form, InputNumber, DatePicker, Button, Radio } from "antd";
import { connect } from "react-redux";
import "./styles.scss";

const AddPriceForm = ({ dispatch }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const date = values["date-picker"].format("YYYY-MM-DD");
        const dayNoon = values["day-noon-radio"];
        const price = values["price-input"];
        dispatch({
            type: "ADD_PRICE",
            payload: { date: date, dayNoon: dayNoon, price: price },
        });
    };

    return (
        <Form form={form} name="price-form" onFinish={onFinish}>
            <Row>
                <Col span={24}>
                    <Form.Item
                        name="date-picker"
                        rule={[
                            { required: true, message: "Please input date" },
                        ]}
                    >
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item name="price-input">
                        <InputNumber
                            placeholder="Nook's Cranny Turnip price"
                            style={{ width: "100%" }}
                            min={0}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item name="day-noon-radio">
                        <Radio.Group>
                            <Radio value="morning">Before 12</Radio>
                            <Radio value="afternoon">After 12</Radio>
                        </Radio.Group>
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

const connectApp = connect(mapDispatchToProps)(AddPriceForm);

export { connectApp as AddPriceForm };
