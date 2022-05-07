import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// view components
import MapView from "views/MapView/MapView";
import Welcome from "views/Welcome/Welcome";
import Imprint from "views/Imprint/Imprint";
import Privacy from "views/Privacy/Privacy";
import References from "views/References/References";

// custom components
import Footer from "components/Footer/Footer";
import Drawer from "components/Drawer/Drawer";

import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.Container}>
      <BrowserRouter>
        <Drawer />
        <Routes>
          <Route path="/references" element={<References />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/maps" element={<MapView />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
