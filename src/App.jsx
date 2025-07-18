/* eslint-disable no-unused-vars */
import React from "react";
import { allRoutes } from "./routes/route";
import { Route, Routes } from "react-router";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        {allRoutes.map(({ path, element: Element }) => (
          <Route path={path} element={<Element />} key={path} />
        ))}
      </Routes>
    </>
  );
}

export default App;
