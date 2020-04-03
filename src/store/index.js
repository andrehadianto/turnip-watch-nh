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
        .format("YYYY-MM-DD")
};

const reducer = (state = initialState, action) => {
    if (action.type === "ADD_PRICE") {
        let tmp = Object.assign({}, state.priceChart);
        if (action.payload.date in state.priceChart) {
            if (action.payload.morningPrice) {
                tmp[action.payload.date][0] = action.payload.morningPrice;
            }
            if (action.payload.afternoonPrice) {
                tmp[action.payload.date][1] = action.payload.afternoonPrice;
            }
            localStorage.setItem("priceChart", JSON.stringify(tmp));
            return Object.assign({}, state, {
                priceChart: tmp
            });
        }
        tmp[action.payload.date] = [
            action.payload.morningPrice,
            action.payload.afternoonPrice
        ];
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
        console.log(action.payload)
        console.log(state)
        console.log(Object.assign({}, state, action.payload))
        return Object.assign({}, state, action.payload);
    }
    return state;
};

const store = createStore(reducer);

export default store;
