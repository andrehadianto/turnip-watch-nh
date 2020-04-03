import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { connect } from "react-redux";
import "./styles.scss";

const RecordState = ({dispatch}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [loadData, setLoadData] = useState("");

    const SaveState = () => {
        const priceChart = JSON.stringify(localStorage.getItem("priceChart"));
        const buyPrice = JSON.stringify(localStorage.getItem("buyPrice"));
        const uuid = JSON.stringify(localStorage.getItem("randid"));
        const data = JSON.stringify([priceChart, buyPrice, uuid]);
        Modal.success({
            title: "Success! Copy the code below to someplace safe",
            content: btoa(data)
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
            payload: {priceChart: JSON.parse(priceChart), buyPrice: JSON.parse(buyPrice)}
        })
    };

    return (
        <>
            <Button onClick={SaveState}>Save</Button>
            <Button onClick={() => setIsVisible(true)}>Load</Button>
            <Modal
                title="Load State"
                visible={isVisible}
                onOk={LoadState}
                onCancel={() => setIsVisible(false)}
            >
                <Input.TextArea
                    autoSize
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
