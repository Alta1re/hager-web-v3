import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "views/Auth/Auth";
import MapView from "views/MapView/MapView";
import Drawer from "components/Drawer/Drawer";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Drawer />
        <Routes>
          <Route path="/maps" element={<MapView />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
