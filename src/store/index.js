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
        if (action.payload.date in state.priceChart) {
            if (action.payload.morningPrice) {
                tmp[action.payload.date][0] = action.payload.morningPrice
            }
            if (action.payload.afternoonPrice) {
                tmp[action.payload.date][1] = action.payload.afternoonPrice
            }
            return Object.assign({}, state, {
                priceChart: tmp
            });
        }
        tmp[action.payload.date] = [action.payload.morningPrice, action.payload.afternoonPrice]
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
