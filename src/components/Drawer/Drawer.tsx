import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import CookieConsent from "react-cookie-consent";

// i18n
import { useTranslation } from "utils/i18n";

// firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { initializeApp, firebaseConfig, getAnalytics } from "utils/firebase";

// redux
import { useDispatch } from "react-redux";
import { setAlert } from "store/alertReducer";

// theme context
import { ThemeContext } from "context/themeContext";

// material-ui-components
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

// material-ui icons
import ListItemIcon from "@mui/material/ListItemIcon";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAddAltRounded";

// custom components
import SignUp from "components/SignUp/SignUp";
import Login from "components/Login/Login";
import BurgerButton from "components/CustomButtons/BurgerButton";
import ThemeSwitch from "components/CustomButtons/ThemeSwitch";
import LanguageSwitch from "components/CustomButtons/LanguageSwitch";

import classes from "./Drawer.module.css";
import { FirebaseApp } from "firebase/app";

export default function Drawer() {
  const [state, setState] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [application, setApplication] = useState<FirebaseApp | undefined>();

  const { toggleTheme, mode } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const switchThemeMode = () => {
    toggleTheme();
  };

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  const auth = initialized ? getAuth() : null;

  const startAnalyticsHandler = () => {
    const analytics = getAnalytics(application);
    console.log("ANALYTICS: ", analytics);
  };

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    setInitialized(true);
    setApplication(app);
  }, [firebaseConfig]);

  useEffect(() => {
    if (initialized && auth) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setSignedIn(true);
        } else {
          setSignedIn(false);
        }
      });
    }
  }, [initialized, auth]);

  const onSubmitSignupHandler = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    if (initialized && auth) {
      try {
        await createUserWithEmailAndPassword(auth, data.email, data.password);

        if (auth.currentUser) {
          updateProfile(auth.currentUser, { displayName: data.name });
        }

        setSignUpOpen(false);
        dispatch(setAlert({ title: t("SUCCESS"), content: t("SIGNED_UP") }));
        onSubmitLoginHandler({ email: data.email, password: data.password });
      } catch (error: any) {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        dispatch(
          setAlert({ title: t("OH_NO") + "!", content: t("SOMETHING_WRONG") })
        );
        console.log("SIGNUP_ERROR: ", errorCode, ": ", errorMessage);
        // ..
      }
    }
  };

  const onSubmitLoginHandler = async (data: {
    email: string;
    password: string;
  }) => {
    if (initialized && auth) {
      try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        setLoginOpen(false);
        dispatch(setAlert({ title: t("SUCCESS"), content: t("LOGGED_IN") }));
      } catch (error: any) {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        dispatch(
          setAlert({ title: t("OH_NO") + "!", content: t("SOMETHING_WRONG") })
        );

        console.log("SIGNUP_ERROR: ", errorCode, ": ", errorMessage);
      }
    }
  };

  const onLogoutHandler = async () => {
    if (initialized && auth) {
      try {
        await signOut(auth);
        dispatch(setAlert({ title: t("SUCCESS"), content: t("LOGGED_OUT") }));
      } catch (error: any) {
        dispatch(
          setAlert({ title: t("OH_NO") + "!", content: t("SOMETHING_WRONG") })
        );
        console.log("SIGNOUT_ERROR: ", error);
      }
    }
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Typography
        sx={{
          fontFamily: "Charmonman-Bold",
          margin: "20px",
          marginBottom: "30px",
          marginLeft: "5px",
          color: "white",
          textShadow: "1px 1px 1px black",
        }}
        variant="h3"
      >
        hager-web
      </Typography>
      <Divider />
      <List>
        {!signedIn ? (
          <ListItem button>
            <Tooltip title={t("LOGIN")}>
              <IconButton onClick={() => setLoginOpen(true)} color="info">
                <LoginIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={t("SIGNUP")}>
              <IconButton onClick={() => setSignUpOpen(true)} color="info">
                <PersonAddIcon />
              </IconButton>
            </Tooltip>
          </ListItem>
        ) : (
          <>
            {auth && auth.currentUser?.displayName && (
              <Typography variant="body1" style={{ textAlign: "center" }}>
                {t("HELLO") + " " + auth.currentUser?.displayName + "!"}
              </Typography>
            )}
            <ListItem button>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <Button variant="text" onClick={onLogoutHandler} color="info">
                {t("LOGOUT")}
              </Button>
            </ListItem>
          </>
        )}
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Link className={classes.Link} to="/">
            {t("HOME")}
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <Link className={classes.Link} to="/maps">
            {t("MAPS")}
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountTreeIcon />
          </ListItemIcon>
          <Link className={classes.Link} to="/references">
            {t("REFERENCES")}
          </Link>
        </ListItem>
      </List>
      <Divider />
      <div className={classes.SwitchContainer}>
        <ThemeSwitch checked={mode === "dark"} onChange={switchThemeMode} />
        <LanguageSwitch />
      </div>
    </Box>
  );

  return (
    <div>
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
      <CookieConsent
        location="bottom"
        buttonText={t("AGREE")}
        declineButtonText={t("DENY")}
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={startAnalyticsHandler}
        onDecline={() => console.log("Declined")}
        enableDeclineButton
      >
        {t("COOKIE_HEADING")}
        <span style={{ fontSize: "10px", display: "block" }}>
          {t("COOKIE_SECOND")}
        </span>
      </CookieConsent>
      <>
        <BurgerButton toggleDrawer={toggleDrawer} />
        <SwipeableDrawer
          anchor="left"
          open={state}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </>
    </div>
  );
}
