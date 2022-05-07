import React, { useState } from "react";

// firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

// custom components
import SignUp from "components/SignUp/SignUp";
import Login from "components/Login/Login";

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

  const auth = getAuth();

  const onSubmitSignupHandler = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // Signed in
      const user = userCredential.user;
      if (auth.currentUser) {
        updateProfile(auth.currentUser, { displayName: data.name });
      }

      setSignUpOpen(false);
    } catch (error: any) {
      const errorCode = error?.code;
      const errorMessage = error?.message;

      console.log("SIGNUP_ERROR: ", errorCode, ": ", errorMessage);
      // ..
    }
  };

  const onSubmitLoginHandler = async (data: {
    email: string;
    password: string;
  }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      // Signed in
      const user = userCredential.user;
      console.log("LOGGED_IN_USER: ", user);
      console.log("AUTH: ", auth);
      const newAuth = getAuth();
      console.log("NEW_AUTH: ", newAuth);
      setLoginOpen(false);
      // ...
    } catch (error: any) {
      const errorCode = error?.code;
      const errorMessage = error?.message;

      console.log("SIGNUP_ERROR: ", errorCode, ": ", errorMessage);
    }
  };

  const onLogoutHandler = async () => {
    try {
      signOut(auth);
      console.log("SIGNED_OUT");
    } catch (error: any) {
      console.log("SIGNOUT_ERROR: ", error);
    }
  };

  return (
    <div className={classes.Container}>
      <Dialog open={signUpOpen} onBackdropClick={() => setSignUpOpen(false)}>
        <DialogContent className={classes.DialogContent}>
          <SignUp onSubmit={onSubmitSignupHandler} />
        </DialogContent>
      </Dialog>
      <Dialog open={loginOpen} onBackdropClick={() => setLoginOpen(false)}>
        <DialogContent className={classes.DialogContent}>
          <Login onSubmit={onSubmitLoginHandler} />
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
        <Button
          onClick={() => onLogoutHandler()}
          variant="contained"
          color="primary"
        >
          {t("LOGOUT")}
        </Button>
      </div>
    </div>
  );
};

export default Auth;
