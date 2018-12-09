import React from "react";
import { Provider } from "react-redux";
import "./config/reactotron";
import store from "./store";
import Routes from "./routes";
const App = () => (
    <Provider store={store}>
        <h1>Hello fucking world!</h1>
        <Routes />
    </Provider>
);

export default App;
