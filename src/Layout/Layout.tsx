import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// view components
import MapView from "views/MapView/MapView";
import Welcome from "views/Welcome/Welcome";
import Imprint from "views/Imprint/Imprint";
import Privacy from "views/Privacy/Privacy";
import References from "views/References/References";
import DragNDrop from "views/DragNDrop/DragNDrop";
import Cards from "views/Cards/Cards";
import Projects from "views/Projects/Projects";
import ProProjects from "views/Projects/Projects/Projects";
import Ressources from "views/Projects/Ressources/Ressources";

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
          <Route path="/projects" element={<Projects />}>
            <Route path="ressources" element={<Ressources />} />
            <Route path="projects" element={<ProProjects />} />
          </Route>
          <Route path="/cards" element={<Cards />} />
          <Route path="/dragdrop" element={<DragNDrop />} />
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
