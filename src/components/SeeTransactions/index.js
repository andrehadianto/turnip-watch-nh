import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

const SeeTransaction = ({ transaction }) => {
    return <></>;
};

const mapStateToProps = (state) => {
    return {
        transaction: state.transaction,
    };
};

const connectApp = connect(mapStateToProps)(SeeTransaction);

export { connectApp as SeeTransaction };
