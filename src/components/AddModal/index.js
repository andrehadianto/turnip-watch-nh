import React, { useState } from "react";
import { Button, Modal, Card, Tabs } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./styles.scss";
import { AddPriceForm } from "../AddPriceForm";
import { AddBuyPriceForm } from "../AddBuyPriceForm";
import { AddTransactionForm } from "../AddTransactionForm";

const AddModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
            <Button shape="round" type="primary" onClick={() => setIsVisible(true)}>
                <PlusOutlined />
                Add Item
            </Button>
            <Modal
                closable
                title="Add Item"
                visible={isVisible}
                onCancel={() => setIsVisible(false)}
                footer={null}
            >
                <Card
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.0)",
                        border: 0,
                    }}
                    headStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.4)",
                        border: 0,
                    }}
                    bodyStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0,4)",
                        border: 0,
                        padding: "0px",
                    }}
                    bordered={false}
                >
                    <Tabs defaultActiveKey="1">
                        <Tabs.TabPane tab="Add Selling Price" key="1">
                            <AddPriceForm />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Add Buying Price" key="2">
                            <AddBuyPriceForm />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Add Transaction" key="3">
                            <AddTransactionForm />
                        </Tabs.TabPane>
                    </Tabs>
                </Card>
            </Modal>
        </>
    );
};

export { AddModal };
