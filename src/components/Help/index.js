import React, { useState } from "react";
import { Button, Modal, Typography } from "antd";
import {
    QuestionOutlined,
    TwitterOutlined,
    InstagramOutlined,
} from "@ant-design/icons";
import "./styles.scss";

const Help = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button shape="circle" onClick={() => setIsVisible(true)}>
                <QuestionOutlined />
            </Button>
            <Modal
                title="Help"
                closable
                visible={isVisible}
                onCancel={() => setIsVisible(false)}
                footer={null}
            >
                <Typography.Text>
                    <b>Getting started</b>
                </Typography.Text>
                <Typography.Paragraph>
                    After getting addicted to the Animal Crossing series, I
                    decided to create this web app as my first online web app to
                    help track the Turnip Stalk Market. The two main features of
                    the app are the Turnip Price Chart and the Earning Chart.
                </Typography.Paragraph>
                <Typography.Paragraph>
                    Find me at{" "}
                    <a href="https://twitter.com/andrehl_96">
                        @andreHL_96 <TwitterOutlined />
                    </a>{" "}
                    or{" "}
                    <a href="https://www.instagram.com/andrehl96/">
                        @andrehl96 <InstagramOutlined />
                    </a>{" "}
                    if you found any bugs!
                </Typography.Paragraph>
                <Typography.Text>
                    <b>How-to-use</b>
                </Typography.Text>
                <Typography.Paragraph>
                    Click on Add Item to start populating the app with data!
                </Typography.Paragraph>
                <Typography.Paragraph>
                    Add Selling Price: the turnip price that Nook's Cranny
                    willing to buy from you. Turnip price changes twice a day.
                    Once at the start of the day, and another one at 12PM of the
                    same day.
                </Typography.Paragraph>
                <Typography.Paragraph>
                    Add Buying Price: the turnip price that you buy from Daisy
                    Mae on Sunday
                </Typography.Paragraph>
                <Typography.Paragraph>
                    Add Transaction: Quantity of turnip that you sell to the
                    Nook's Cranny. Also input how much did you buy and sell the
                    turnip for. The equation to get the net income is,
                    quantity*(sell_price-buy_price)
                </Typography.Paragraph>
                <Typography.Text>
                    <b>How to save?</b>
                </Typography.Text>
                <Typography.Paragraph>
                    Clicking save will return the serialized and encoded data of
                    the current state. Paste the returned data into the Load
                    input to Load the state.
                </Typography.Paragraph>
                <Typography.Text>
                    <b>Credit</b>
                </Typography.Text>
                <Typography.Paragraph>
                    <a href="https://catwithmonocle.com/">CatWithMonocle</a> for
                    the background image
                </Typography.Paragraph>
            </Modal>
        </>
    );
};

export { Help };
