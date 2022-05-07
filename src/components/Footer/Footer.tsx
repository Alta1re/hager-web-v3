import React from "react";

import { Link } from "react-router-dom";

// material-ui components
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

// i18n
import { useTranslation } from "utils/i18n";

import classes from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.Container}>
      <Paper className={classes.Blender} />
      <Grid container className={classes.Content}>
        <Grid item xs={6}>
          <Typography className={classes.Text} variant="h5">
            {t("LINKS")}
          </Typography>
          <Link to="/imprint" className={classes.Links}>
            <Typography variant="body1">{t("IMPRINT")}</Typography>
          </Link>

          <Typography variant="body1">
            <Link className={classes.Links} to="/privacy">
              {t("PRIVACY")}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.Text} variant="h5">
            {t("SOCIAL_MEDIA")}
          </Typography>
          <a href="https://www.facebook.com/hager.web" className={classes.Icon}>
            <FontAwesomeIcon
              icon={brands("facebook-square")}
              size="2x"
              color="#3b5998"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sven-hager-9a28981b5"
            className={classes.Icon}
          >
            <FontAwesomeIcon
              icon={brands("linkedin")}
              size="2x"
              color="#2867B2"
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
