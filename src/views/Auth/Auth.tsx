import React from "react";

// custom components
import SignUp from "components/SignUp/SignUp";

// material-ui-components
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <div>
      <Dialog open={true}>
        <DialogContent className={classes.DialogContent}>
          <SignUp
            onSubmit={({ name, email, password }) =>
              console.log("USER_DATA: ", name, email, password)
            }
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Auth;
