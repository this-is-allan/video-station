import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./store";
import GlobalStyle from "./styles/global";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById("root")
);
