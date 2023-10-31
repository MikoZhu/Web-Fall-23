// routes.js
import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Translate } from "../pages/Translate";
import { Lottie } from "../pages/Lottie";
import { Moment } from "../pages/Moment";
import { Styled } from "../pages/Styled";
import { Burger } from "../pages/Burger";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/translate" element={<Translate />} />
    <Route path="/animations" element={<Lottie />} />
    <Route path="/moment-js" element={<Moment />} />
    <Route path="/styled-comps" element={<Styled />} />
    <Route path="/burger" element={<Burger />} />
  </>
);

export default routes;
