import React, { useState } from "react";
import { Typography, message, Modal, Button, Input } from "antd";
import { SaveFilled, FileAddFilled} from '@ant-design/icons'
import { connect } from "react-redux";
import "./styles.scss";

const RecordState = ({ dispatch }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [loadData, setLoadData] = useState("");

    const SaveState = () => {
        const priceChart = JSON.stringify(localStorage.getItem("priceChart"));
        const buyPrice = JSON.stringify(localStorage.getItem("buyPrice"));
        const uuid = JSON.stringify(localStorage.getItem("randid"));
        const data = JSON.stringify([priceChart, buyPrice, uuid]);
        Modal.success({
            title: "Success! Copy the code below to someplace safe",
            content: (<Typography.Paragraph copyable>{btoa(data).toString()}</Typography.Paragraph>)
        });
    };

    const LoadState = () => {
        const data = JSON.parse(atob(loadData));
        const priceChart = JSON.parse(data[0]);
        const buyPrice = JSON.parse(data[1]);
        const uuid = JSON.parse(data[2]);
        localStorage.setItem("priceChart", priceChart);
        localStorage.setItem("buyPrice", buyPrice);
        localStorage.setItem("randid", uuid);
        dispatch({
            type: "LOAD_STATE",
            payload: {
                priceChart: JSON.parse(priceChart),
                buyPrice: JSON.parse(buyPrice)
            }
        });
        setIsVisible(false);
        message.success("Load state successful!");
    };

    return (
        <>
            <Button.Group>
                <Button type="link" onClick={SaveState}>
                    <SaveFilled/>
                    Save
                </Button>
                <Button type="link" onClick={() => setIsVisible(true)}>
                    Load
                    <FileAddFilled/>
                </Button>
            </Button.Group>
            <Modal
                title="Load State"
                visible={isVisible}
                onOk={LoadState}
                onCancel={() => setIsVisible(false)}
            >
                <Typography.Text>
                    Copy the code you saved here
                </Typography.Text>
                <br />
                <Input.TextArea
                    autoSize={{ minRows: 4 }}
                    onChange={e => setLoadData(e.target.value)}
                />
            </Modal>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return { dispatch };
};

const connectApp = connect(mapDispatchToProps)(RecordState);

export { connectApp as RecordState };
