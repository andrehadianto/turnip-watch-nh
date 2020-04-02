import React from "react";
import { Form, DatePicker } from "antd";
import { connect } from "react-redux";
import moment from "moment";
import "./styles.scss";

const DateFilter = ({ dateFilter, dispatch }) => {
    const onChange = value => {
        const date = value.startOf('week').format("YYYY-MM-DD");
        dispatch({
            type: "SET_DATE_FILTER",
            payload: { date: date }
        });
    };
    return (
        <DatePicker
            onChange={onChange}
            defaultValue={moment(dateFilter, "YYYY-MM-DD")}
            picker="week"
            allowClear={false}
        />
    );
};

const mapStateToProps = state => {
    return { dateFilter: state.dateFilter };
};

const mapDispatchToProps = dispatch => {
    return { dispatch };
};

const connectApp = connect(mapStateToProps, mapDispatchToProps)(DateFilter);

export { connectApp as DateFilter };
