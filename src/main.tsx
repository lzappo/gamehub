import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./chakraComponents/ui/provider";
import App from "./App";
import "./index.css";
import { ColorModeButton } from "./chakraComponents/ui/color-mode";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
