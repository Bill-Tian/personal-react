import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// tailwind css
import "./styles/index.css";

import store from "@/store";
import "@/assets/icons/index";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
