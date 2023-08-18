import React from "react";
import { createRoot } from "react-dom/client";
import store from "./app/store";
import { Provider } from "react-redux";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { persistor } from "./app/store";

const container = document.getElementById("root");
const root = createRoot(container!);

// let pasistor = persistStore(store)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
