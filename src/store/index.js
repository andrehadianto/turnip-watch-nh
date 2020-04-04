import { createStore } from "redux";
import moment from "moment";

const initialState = {
    priceChart: localStorage.getItem("priceChart")
        ? JSON.parse(localStorage.getItem("priceChart"))
        : {},
    buyPrice: localStorage.getItem("buyPrice")
        ? JSON.parse(localStorage.getItem("buyPrice"))
        : {},
    dateFilter: moment()
        .startOf("week")
        .format("YYYY-MM-DD"),
    transaction: localStorage.getItem("transaction")
        ? JSON.parse(localStorage.getItem("transaction"))
        : {}
};

const reducer = (state = initialState, action) => {
    if (action.type === "ADD_PRICE") {
        let tmp = Object.assign({}, state.priceChart);
        if (!(action.payload.date in state.priceChart)) {
            tmp[action.payload.date] = [];
        }
        if (action.payload.dayNoon === "morning") {
            tmp[action.payload.date][0] = action.payload.price;
        } else if (action.payload.dayNoon === "afternoon") {
            tmp[action.payload.date][1] = action.payload.price;
        }
        localStorage.setItem("priceChart", JSON.stringify(tmp));
        return Object.assign({}, state, {
            priceChart: tmp
        });
    }
    if (action.type === "ADD_BUY_PRICE") {
        let tmp = Object.assign({}, state.buyPrice);
        tmp[action.payload.date] = action.payload.buyingPrice;
        localStorage.setItem("buyPrice", JSON.stringify(tmp));
        return Object.assign({}, state, {
            buyPrice: tmp
        });
    }
    if (action.type === "SET_DATE_FILTER") {
        return Object.assign({}, state, {
            dateFilter: action.payload.date
        });
    }
    if (action.type === "LOAD_STATE") {
        return Object.assign({}, state, action.payload);
    }
    if (action.type === "ADD_TRANSACTION") {
        let tmp = Object.assign({}, state.transaction);
        if (!(action.payload.date in state.transaction)) {
            tmp[action.payload.date] = [];
        }
        tmp[action.payload.date].push([
            action.payload.quantity,
            action.payload.buyPrice,
            action.payload.sellPrice
        ]);
        localStorage.setItem("transaction", JSON.stringify(tmp));
        return Object.assign({}, state, { transaction: tmp });
    }
    return state;
};

const store = createStore(reducer);

export default store;
