import React from "react";

import MachineCard from "components/MachineCard/MachineCard";

// material-ui
import Grid from "@mui/material/Grid";

import classes from "./Ressources.module.css";

const Ressources = () => {
  const data = {
    brand: "Chiron",
    model: "3SX-8",
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <MachineCard data={data} />
      </Grid>
    </Grid>
  );
};

export default Ressources;
