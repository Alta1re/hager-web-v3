import React, { useState } from "react";

// custom components
import SignUp from "components/SignUp/SignUp";

// material-ui-components
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

import { useTranslation } from "utils/i18n";

import classes from "./Auth.module.css";

const Auth = () => {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <div className={classes.Container}>
      <Dialog open={signUpOpen} onBackdropClick={() => setSignUpOpen(false)}>
        <DialogContent className={classes.DialogContent}>
          <SignUp
            onSubmit={({ name, email, password }) =>
              console.log("USER_DATA: ", name, email, password)
            }
          />
        </DialogContent>
      </Dialog>
      <div className={classes.ButtonContainer}>
        <Button
          onClick={() => setSignUpOpen(true)}
          variant="contained"
          color="primary"
        >
          {t("SIGNUP")}
        </Button>
        <Button
          onClick={() => setLoginOpen(true)}
          variant="contained"
          color="primary"
        >
          {t("LOGIN")}
        </Button>
      </div>
    </div>
  );
};

export default Auth;
