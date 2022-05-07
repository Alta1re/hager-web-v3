import React from "react";

// i18n
import { useTranslation } from "utils/i18n";

// fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

// material-ui components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

// images
import mePortrait from "assets/images/portraits/me_portrait.jpg";
import tsLogo from "assets/icons/ts-logo-128.svg";

import classes from "./Welcome.module.css";

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.Container}>
      <Paper className={classes.Blender} />
      <Grid container sx={{ zIndex: 2 }} spacing={5} alignContent="flex-start">
        <Grid item xs={12}>
          <Typography
            variant="h1"
            color="white"
            sx={{
              textShadow: "1px 1px 1px black",
              fontFamily: "Charmonman-bold",
            }}
          >
            hager-web
          </Typography>
          <Typography
            variant="h3"
            color="white"
            sx={{
              textShadow: "1px 1px 1px black",
              marginTop: "20px",
            }}
          >
            {t("APP_DEV")}
          </Typography>
          <Typography
            variant="h3"
            color="white"
            sx={{
              textShadow: "1px 1px 1px black",
            }}
          >
            {t("WE_DEV_APPS")}
          </Typography>
        </Grid>
        <Grid item>
          <Card>
            <CardHeader title={t("WELCOME")} />
            <CardContent>
              <div className={classes.WelcomeContentContainer}>
                <div>
                  <img
                    src={mePortrait}
                    alt="portrait of site owner"
                    width="250px"
                    height="250px"
                    style={{
                      margin: "20px",
                      overflow: "hidden",
                      borderRadius: "125px",
                    }}
                  />
                </div>
                <div>
                  <Typography align="left" variant="h6">
                    {t("ABOUT_ME")}
                  </Typography>
                  <Divider />
                  <Typography align="left" variant="h6">
                    {t("SKILLS")}
                  </Typography>
                  <Divider />
                  <Typography align="left" variant="h6">
                    {t("MORE_SKILLS")}
                  </Typography>
                  <Divider />
                  <Typography align="left" variant="h6">
                    {t("DRAWER_MENU")}
                  </Typography>
                  <Divider />
                  <Typography align="left" variant="h6">
                    {t("REPOSITORY")}
                  </Typography>
                  <a
                    href="https://github.com/Alta1re/hager-web-v3.git"
                    className={classes.GithubLink}
                  >
                    GitHub-Repository
                  </a>
                  <Divider />

                  <div className={classes.Logos}>
                    <FontAwesomeIcon
                      icon={brands("css3")}
                      size="6x"
                      color="#2965f1"
                    />
                    <FontAwesomeIcon
                      icon={brands("html5")}
                      size="6x"
                      color="#f06529"
                    />
                    <FontAwesomeIcon
                      icon={brands("react")}
                      size="6x"
                      color="#61DBFB"
                    />
                    <FontAwesomeIcon
                      icon={brands("js")}
                      size="6x"
                      color="#f0db4f"
                    />
                    <img src={tsLogo} width="84px" alt="typescript-logo" />
                    <FontAwesomeIcon
                      icon={brands("node")}
                      size="6x"
                      color="#68a063"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
