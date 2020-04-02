import React from "react";
import { Provider } from "react-redux";
import { Main } from "../main";
import store from "../../store/index";

const App = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
};

export default App;