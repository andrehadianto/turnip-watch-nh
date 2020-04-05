import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Main } from "../main";
import ReactGa from "react-ga";
import store from "../../store/index";

const App = () => {
    useEffect(() => {
        ReactGa.initialize("UA-162611410-1");
        ReactGa.pageview("/");
    }, []);

    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
};

export default App;
