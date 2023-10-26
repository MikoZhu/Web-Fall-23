// routes.js
import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { ConditionalNavigation } from "../pages/ConditionalNavigation";
import { ConditionalNavigationWithLocalStorage } from "../pages/ConditionalNavigationWithLocalStorage";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/conditional-navigation" element={<ConditionalNavigation />} />
    <Route
      path="/conditional-navigation-with-local-storage"
      element={<ConditionalNavigationWithLocalStorage />}
    />
  </>
);

export default routes;
