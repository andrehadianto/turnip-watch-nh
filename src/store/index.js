import { createStore } from "redux";
import moment from "moment";

const initialState = {
    priceChart: localStorage.getItem("priceChart")
        ? JSON.parse(localStorage.getItem("priceChart"))
        : {},
    buyPrice: localStorage.getItem("buyPrice")
        ? JSON.parse(localStorage.getItem("buyPrice"))
        : {},
    dateFilter: moment().startOf("week").format("YYYY-MM-DD"),
    transaction: localStorage.getItem("transaction")
        ? JSON.parse(localStorage.getItem("transaction"))
        : {},
};

const reducer = (state = initialState, action) => {
    if (action.type === "ADD_PRICE") {
        const tmp = Object.assign({}, state.priceChart);
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
            priceChart: tmp,
        });
    }
    if (action.type === "ADD_BUY_PRICE") {
        const tmp = Object.assign({}, state.buyPrice);
        tmp[action.payload.date] = action.payload.buyingPrice;
        localStorage.setItem("buyPrice", JSON.stringify(tmp));
        return Object.assign({}, state, {
            buyPrice: tmp,
        });
    }
    if (action.type === "SET_DATE_FILTER") {
        return Object.assign({}, state, {
            dateFilter: action.payload.date,
        });
    }
    if (action.type === "LOAD_STATE") {
        return Object.assign({}, state, action.payload);
    }
    if (action.type === "ADD_TRANSACTION") {
        const tmp = Object.assign({}, state.transaction);
        if (!(action.payload.date in state.transaction)) {
            tmp[action.payload.date] = [];
        }
        let txn = [];
        if (action.payload.buySell === "buy") {
            txn[0] = action.payload.quantity;
            txn[1] = action.payload.price;
            txn[2] = 0;
        } else if (action.payload.buySell === "sell") {
            txn[0] = action.payload.quantity;
            txn[1] = 0;
            txn[2] = action.payload.price;
        }
        tmp[action.payload.date].push(txn);

        let sortedArray = [];
        const sortedTmp = {};
        Object.keys(tmp).forEach((date) => {
            sortedArray.push(moment(date, "YYYY-MM-DD"));
        });
        sortedArray = sortedArray.sort((a, b) => b.diff(a));
        sortedArray.forEach((date) => {
            sortedTmp[date.format("YYYY-MM-DD")] =
                tmp[date.format("YYYY-MM-DD")];
        });

        localStorage.setItem("transaction", JSON.stringify(sortedTmp));
        return Object.assign({}, state, { transaction: sortedTmp });
    }
    if (action.type === "DELETE_TRANSACTION") {
        var BreakException = {};
        const tmp = Object.assign({}, state.transaction);
        try {
            tmp[action.payload.date].forEach((item, index) => {
                if (
                    item[0] === action.payload.quantity &&
                    item[1] === action.payload.buy &&
                    item[2] === action.payload.sell
                ) {
                    tmp[action.payload.date].splice(index, 1);
                    if (tmp[action.payload.date].length === 0) {
                        delete tmp[action.payload.date];
                    }
                    throw BreakException;
                }
            });
        } catch (e) {
            localStorage.setItem("transaction", JSON.stringify(tmp));
            return Object.assign({}, state, { transaction: tmp });
        }
    }
    return state;
};

const store = createStore(reducer);

export default store;
