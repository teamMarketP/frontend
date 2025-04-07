import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
