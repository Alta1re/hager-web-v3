import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "views/Auth/Auth";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
