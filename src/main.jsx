import React from "react";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import GlobalProvider from "./context_api/GlobalProvider.jsx";
import { BrowserRouter } from "react-router";
import Loader from "./components/loader/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </GlobalProvider>
    </BrowserRouter>
  </StrictMode>
);
