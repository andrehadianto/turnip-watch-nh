import React from "react";
import { Button } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import "./styles.scss";

const Help = () => {
    return (
        <>
            <Button shape="circle">
                <QuestionOutlined />
            </Button>
        </>
    );
};

export { Help };
