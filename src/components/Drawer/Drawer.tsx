import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

// i18n
import { useTranslation } from "utils/i18n";

// theme context
import { ThemeContext } from "context/themeContext";

// material-ui components
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

// material-ui icons
import ListItemIcon from "@mui/material/ListItemIcon";
import MapIcon from "@mui/icons-material/Map";
import PersonIcon from "@mui/icons-material/Person";

// custom components
import BurgerButton from "components/CustomButtons/BurgerButton";
import ThemeSwitch from "components/CustomButtons/ThemeSwitch";
import LanguageSwitch from "components/CustomButtons/LanguageSwitch";

import classes from "./Drawer.module.css";

export default function Drawer() {
  const [state, setState] = useState(false);
  const [themeMode, setThemeMode] = useState(false);

  const { toggleTheme } = useContext(ThemeContext);

  const { t } = useTranslation();

  const switchThemeMode = () => {
    setThemeMode((prev) => !prev);
    toggleTheme();
  };

  const toggleDrawer = (open: boolean) => {
    setState(open);
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
            <PersonIcon />
          </ListItemIcon>
          <Link className={classes.Link} to="/auth">
            {t("AUTH")}
          </Link>
        </ListItem>
      </List>
      <Divider />
      <div className={classes.SwitchContainer}>
        <ThemeSwitch checked={themeMode} onChange={switchThemeMode} />
        <LanguageSwitch />
      </div>
    </Box>
  );

  return (
    <div>
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
