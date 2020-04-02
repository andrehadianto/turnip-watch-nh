import { createStore } from "redux";

const initialState = {
    priceChart: {},
    buyPrice: {},
    userId: ""
};

const reducer = (state = initialState, action) => {
    if (action.type === "ADD_PRICE") {
        // Object.assign( new-object-to-be-assigned, ...the-objects)
        let tmp = state.priceChart;
        tmp[action.payload.date] = action.payload.price;
        return Object.assign({}, state, {
            priceChart: tmp
        });
    }
    if (action.type === "ADD_BUY_PRICE") {
        let tmp = state.buyPrice;
        tmp[action.payload.week] = action.payload.price;
        return Object.assign({}, state, {
            buyPrice: tmp
        });
    }
    return state;
};

const store = createStore(reducer);

export default store;
