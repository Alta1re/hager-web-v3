import React, { useState } from "react";

import { useDispatch } from "react-redux";

import GoogleMaps from "components/GoogleMaps/GoogleMaps";

import axios from "axios";

import { setAlert } from "store/alertReducer";

// material-ui components
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ClearIcon from "@mui/icons-material/Clear";

import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { useTranslation } from "utils/i18n";

import classes from "./MapView.module.css";

export type ICoords = google.maps.LatLng | google.maps.LatLngLiteral;

interface IAddress {
  index: number;
  formattedAddress: string;
  place_id: string;
  coord: string;
  city: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GOOGLE_MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MapView = () => {
  const [pickedAddresses, setPickedAddresses] = useState<Array<IAddress>>([]);
  const [pickedCoordinates, setPickedCoordinates] = useState<ICoords[]>([]);
  const [distance, setDistance] = useState("");

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const fetchAddress = async (coordinates: ICoords, index: number) => {
    try {
      setPickedCoordinates((oldState) => [...oldState, coordinates]);
      const coord = coordinates.toString().replace(/[)(%\s]/g, "");
      const resData = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coord}&language=de&key=${GOOGLE_MAPS_KEY}`
      );
      const address: IAddress = {
        index: index,
        formattedAddress: resData.data.results[0].formatted_address,
        place_id: resData.data.results[0].place_id,
        coord: coord,
        city: resData.data.results[0].address_components[3].long_name,
      };
      const newpickedAddresses = [...pickedAddresses, address];
      setPickedAddresses(newpickedAddresses);
    } catch (err: any) {
      dispatch(
        setAlert({
          title: t("OH_NO"),
          content: t("SOMETHING_WRONG") + ": " + err.toString(),
        })
      );
    }
  };

  const deleteAddressHandler = (index: number) => {
    const updatedAddresses = [...pickedAddresses];
    updatedAddresses.splice(index, 1);
    setPickedAddresses(updatedAddresses);
    const updatedCoords = [...pickedCoordinates];
    updatedCoords.splice(index, 1);
    setPickedCoordinates(updatedCoords);
  };

  const addressList = pickedAddresses.map((waypoint, key) => {
    const addressArray = waypoint.formattedAddress.split(",");
    return (
      <Item key={key}>
        <div className={classes.ItemContainer}>
          <div>
            <Typography variant="h5">{t("POS") + " " + (key + 1)}</Typography>
            {addressArray.map((address: string, index: number) => (
              <Typography key={address + index} variant="body1">
                {address}
              </Typography>
            ))}
            <Typography variant="body1">{waypoint.coord}</Typography>
          </div>
          <div className={classes.optionsContainer}>
            <IconButton
              aria-label="delete-button"
              color="error"
              onClick={() => deleteAddressHandler(key)}
            >
              <ClearIcon />
            </IconButton>
          </div>
        </div>
      </Item>
    );
  });

  return (
    <div className={classes.Container}>
      <Paper className={classes.Blender} />
      <Grid
        container
        justifyContent="space-around"
        rowSpacing={5}
        sx={{ zIndex: 2 }}
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              fontFamily: "Charmonman-bold",
              textShadow: "1px 1px 1px black",
            }}
            color="#ffffff"
            variant="h1"
          >
            {t("MAP_VIEW")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={10} lg={6}>
          <Card>
            <CardHeader
              title="Google Maps"
              subheader={t("CLICK_ON_MAP")}
              titleTypographyProps={{ textAlign: "center" }}
            />
            <CardContent className={classes.MapContainer}>
              <GoogleMaps
                pickedCoords={pickedCoordinates}
                onPickedAddress={fetchAddress}
                setDistance={setDistance}
              />
              <Typography variant="caption">
                {t("DISTANCE") + ": " + distance}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={10} lg={5}>
          <Card>
            <CardHeader title={t("WAYPOINTS")} />
            <CardContent>
              <Stack spacing={2}>{addressList}</Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default MapView;
