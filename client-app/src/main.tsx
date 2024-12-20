import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/layout/App.tsx";
import "semantic-ui-css/semantic.min.css";
import "./app/layout/styles.css";
import { store, StoreCotext } from "./app/stores/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreCotext.Provider value={store}>
      <App />
    </StoreCotext.Provider>
  </StrictMode>
);
