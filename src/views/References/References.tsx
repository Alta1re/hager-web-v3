import React from "react";

import { appImages, dashboardImages } from "constants/references";

// custom components
import CustomImageList from "components/CustomImageList/CustomImageList";

// i18n
import { useTranslation } from "utils/i18n";

// material-ui components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

import classes from "./References.module.css";
import { Typography } from "@mui/material";

const References = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.Container}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontFamily: "Charmonman-bold",
              textShadow: "1px 1px 1px black",
            }}
            color="#ffffff"
            variant="h1"
          >
            {t("REFERENCES")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Card>
            <CardHeader title={t("MOBILE_APPS")} />
            <CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {appImages && appImages.length >= 1 && (
                  <CustomImageList itemData={appImages} />
                )}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Card>
            <CardHeader title={t("REACT_APPLICATION")} />
            <CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {dashboardImages && dashboardImages.length >= 1 && (
                  <CustomImageList
                    itemData={dashboardImages}
                    containerWidth={1100}
                    containerHeight={900}
                    rowHeight={200}
                    cols={2}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default References;
