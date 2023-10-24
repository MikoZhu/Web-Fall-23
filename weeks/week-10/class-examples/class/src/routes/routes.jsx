// routes.js
import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import { ContextPage } from "../pages/ContextPage";
import { ZustandPage } from "../pages/ZustandPage";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/context-api" element={<ContextPage />} />
    <Route path="/zustand" element={<ZustandPage />} />
  </>
);

export default routes;
