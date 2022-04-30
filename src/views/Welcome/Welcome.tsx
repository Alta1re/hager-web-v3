import React from "react";

import { useTranslation } from "utils/i18n";

// material-ui components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import mePortrait from "assets/images/portraits/me_portrait.jpg";

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
                  <Typography align="left" variant="h6">
                    {t("SKILLS")}
                  </Typography>
                  <Typography align="left" variant="h6">
                    {t("MORE_SKILLS")}
                  </Typography>
                  <Typography align="left" variant="h6">
                    {t("DRAWER_MENU")}
                  </Typography>
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
