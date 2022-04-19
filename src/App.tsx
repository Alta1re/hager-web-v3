import React from "react";

// layout component
import Layout from "Layout/Layout";

// global alert hoc for convenient error-handling
import withGlobalAlert from "hoc/withGlobalAlert";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default withGlobalAlert(App);
