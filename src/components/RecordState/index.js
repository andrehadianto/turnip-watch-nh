import React, { useState } from "react";
import { Typography, message, Modal, Button, Input } from "antd";
import { SaveFilled, FileAddFilled } from "@ant-design/icons";
import { connect } from "react-redux";
import "./styles.scss";

const RecordState = ({ dispatch }) => {
    const [isLoadVisible, setIsLoadVisible] = useState(false);
    const [isResetVisible, setIsResetVisible] = useState(false);
    const [loadData, setLoadData] = useState("");

    const SaveState = () => {
        const priceChart = JSON.stringify(localStorage.getItem("priceChart"));
        const buyPrice = JSON.stringify(localStorage.getItem("buyPrice"));
        const uuid = JSON.stringify(localStorage.getItem("randid"));
        const transaction = JSON.stringify(localStorage.getItem("transaction"));
        const data = JSON.stringify([priceChart, buyPrice, uuid, transaction]);
        Modal.success({
            title: "Success! Copy the code below to someplace safe",
            content: (
                <Typography.Paragraph copyable>
                    {btoa(data).toString()}
                </Typography.Paragraph>
            ),
        });
    };

    const LoadState = () => {
        const data = JSON.parse(atob(loadData));
        const priceChart = JSON.parse(data[0]);
        const buyPrice = JSON.parse(data[1]);
        const uuid = JSON.parse(data[2]);
        const transaction = JSON.parse(data[3]);
        localStorage.setItem("priceChart", priceChart);
        localStorage.setItem("buyPrice", buyPrice);
        localStorage.setItem("randid", uuid);
        localStorage.setItem("transaction", transaction);
        dispatch({
            type: "LOAD_STATE",
            payload: {
                priceChart: JSON.parse(priceChart),
                buyPrice: JSON.parse(buyPrice),
                transaction: JSON.parse(transaction),
            },
        });
        setIsLoadVisible(false);
        message.success("Load state successful!");
    };

    const ResetState = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
            <Button.Group>
                <Button type="link" onClick={SaveState}>
                    <SaveFilled />
                    Save
                </Button>
                <Button type="link" onClick={() => setIsLoadVisible(true)}>
                    Load
                    <FileAddFilled />
                </Button>
                <Button
                    danger
                    type="link"
                    onClick={() => setIsResetVisible(true)}
                >
                    Reset
                    <FileAddFilled />
                </Button>
            </Button.Group>
            <Modal
                title="Load State"
                visible={isLoadVisible}
                onOk={LoadState}
                onCancel={() => setIsLoadVisible(false)}
            >
                <Typography.Text>Copy the code you saved here</Typography.Text>
                <br />
                <Input.TextArea
                    allowClear
                    autoSize={{ minRows: 4 }}
                    onChange={(e) => setLoadData(e.target.value)}
                />
            </Modal>
            <Modal
                type="warning"
                title="Are you sure?"
                visible={isResetVisible}
                onOk={ResetState}
                okType="danger"
                okText="Delete!"
                onCancel={() => setIsResetVisible(false)}
            >
                <Typography.Text>
                    This will delete all your state to a blank slate!
                </Typography.Text>
            </Modal>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};

const connectApp = connect(mapDispatchToProps)(RecordState);

export { connectApp as RecordState };
