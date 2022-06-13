import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./config/theme.config";
import "../src/config/styles.css";

import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
