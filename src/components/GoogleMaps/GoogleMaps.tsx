import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

import CircularProgress from "@mui/material/CircularProgress";

import classes from "./GoogleMaps.module.css";

const GOOGLE_MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

interface IMapProps {
  onPickedAddress: (
    coordinates: google.maps.LatLng | google.maps.LatLngLiteral,
    index: number
  ) => void;
  pickedCoords: Array<google.maps.LatLng | google.maps.LatLngLiteral>;
  setDistance: (distance: string) => void;
}

const GoogleMaps = (props: IMapProps) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_KEY!, // ,
    // ...otherOptions
  });
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [directionsUpdated, setDirectionsUpdated] = useState<boolean>(false);
  const [mapCenter, setMapCenter] = useState({ lat: 50.1, lng: 8.6 });
  const [waypoints, setWaypoints] = useState<
    Array<google.maps.DirectionsWaypoint> | undefined
  >(undefined);
  const [origin, setOrigin] = useState<
    google.maps.LatLng | google.maps.LatLngLiteral | undefined
  >(undefined);
  const [destination, setDestination] = useState<
    google.maps.LatLng | google.maps.LatLngLiteral | undefined
  >(undefined);

  const markerRefs = useRef();
  const mapRef = useRef();

  const options = isLoaded && {
    gestureHandling: "cooperative",
    draggableCursor: "crosshair",
    disableDefaultUI: false,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP, // 'right-center' ,
      // ...otherOptions
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: window.google.maps.ControlPosition.TOP_RIGHT,
    },
    scaleControl: true,
    streetViewControl: true,
    rotateControl: false,
    fullscreenControl: true,
    styles: [
      {
        featureType: "water",
        stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }],
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [{ hue: "#ff0000" }, { saturation: -100 }, { lightness: 99 }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#808080" }, { lightness: 54 }],
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.fill",
        stylers: [{ color: "#ece2d9" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#ccdca1" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#767676" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ffffff" }],
      },
      { featureType: "poi", stylers: [{ visibility: "off" }] },
      {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
      },
      { featureType: "poi.park", stylers: [{ visibility: "on" }] },
      {
        featureType: "poi.sports_complex",
        stylers: [{ visibility: "on" }],
      },
      { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
      {
        featureType: "poi.business",
        stylers: [{ visibility: "simplified" }],
      },
    ],
  };

  useEffect(() => {
    setDirectionsUpdated(false);
    if (props.pickedCoords.length > 2) {
      const newWaypoints = [...props.pickedCoords];
      const dest = newWaypoints.pop();
      const start = newWaypoints.shift();
      const transformedWaypoints = newWaypoints.map((waypoint) => {
        return { location: waypoint } as google.maps.DirectionsWaypoint;
      });
      setWaypoints(transformedWaypoints);
      setOrigin(start);
      setDestination(dest);
    } else if (props.pickedCoords.length === 2) {
      setOrigin(props.pickedCoords[0]);
      setDestination(props.pickedCoords[1]);
    }
  }, [props.pickedCoords]);

  const onMapClickHandler = (e: google.maps.MapMouseEvent) => {
    e.latLng && props.onPickedAddress(e.latLng, props.pickedCoords.length);
    console.log("MAP_MOUSE_EVENT", e.latLng);
    setDirections(null);
    setDirectionsUpdated(false);
  };

  const onMapChangedHandler = () => {
    //console.log("MAP_CHANGED: ", mapRef.current);
  };

  const onDirectionsReceivedHandler = (
    response: google.maps.DirectionsResult | null
  ) => {
    setDirections(response);
    setDirectionsUpdated(true);
    if (response) {
      let sumDist = 0;
      response.routes[0].legs.forEach((leg) => {
        if (leg.distance) sumDist += leg.distance?.value;
      });
      const newDistance =
        sumDist > 1000 ? (sumDist / 1000).toFixed(1) + " km" : sumDist + " m";
      props.setDistance(newDistance);
    }
  };

  const markers =
    props.pickedCoords.length === 1
      ? props.pickedCoords.map((coord, index) => {
          return <Marker key={"marker" + index} position={coord} />;
        })
      : null;

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    const onLoad = (mapInstance: any) => {
      // do something with map Instance
      mapRef.current = mapInstance;
    };
    return (
      <GoogleMap
        id="google-maps"
        mapContainerClassName={classes.Container}
        onClick={onMapClickHandler}
        options={options ? options : {}}
        onLoad={onLoad}
        zoom={7}
        center={mapCenter}
        onCenterChanged={onMapChangedHandler}
      >
        {markers}
        {origin && destination && !directionsUpdated && (
          <DirectionsService
            // required
            options={{
              destination: destination,
              origin: origin,
              waypoints: waypoints,
              travelMode: google.maps.TravelMode.WALKING,
              provideRouteAlternatives: false,
              optimizeWaypoints: true,
            }}
            // required
            callback={onDirectionsReceivedHandler}
            // optional
            onLoad={(directionsService) => {
              console.log(
                "DirectionsService onLoad directionsService: ",
                directionsService
              );
            }}
            // optional
            onUnmount={(directionsService) => {
              console.log(
                "DirectionsService onUnmount directionsService: ",
                directionsService
              );
            }}
          />
        )}
        {directions && (
          <DirectionsRenderer
            // required
            options={{
              directions: directions,
            }}
            // optional
            onLoad={(directionsRenderer) => {
              console.log(
                "DirectionsRenderer onLoad directionsRenderer: ",
                directionsRenderer
              );
            }}
            // optional
            onUnmount={(directionsRenderer) => {
              console.log(
                "DirectionsRenderer onUnmount directionsRenderer: ",
                directionsRenderer
              );
            }}
          />
        )}
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <CircularProgress />;
};

export default GoogleMaps;
