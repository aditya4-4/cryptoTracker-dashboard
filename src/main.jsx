import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WatchlistProvider } from "./context/WatchlistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WatchlistProvider>
      <App />
    </WatchlistProvider>
  </React.StrictMode>
);
