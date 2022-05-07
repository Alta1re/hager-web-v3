import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polyline,
} from "@react-google-maps/api";

import CircularProgress from "@mui/material/CircularProgress";

import classes from "./GoogleMaps.module.css";

const GOOGLE_MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const polylineOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 5,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

type Coords = google.maps.LatLng | google.maps.LatLngLiteral;
interface IMapProps {
  onPickedAddress: (coordinates: Coords, index: number) => void;
  pickedCoords: Array<Coords>;
  setDistance: (distance: string) => void;
}

const GoogleMaps = (props: IMapProps) => {
  const { setDistance, onPickedAddress, pickedCoords } = props;
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_KEY!, // ,
    // ...otherOptions
  });
  const [mapCenter] = useState({ lat: 50.1, lng: 8.6 });
  const [waypoints, setWaypoints] = useState<
    Array<google.maps.DirectionsWaypoint> | undefined
  >(undefined);
  const [origin, setOrigin] = useState<Coords | undefined>(undefined);
  const [destination, setDestination] = useState<Coords | undefined>(undefined);
  const [path, setPath] = useState<
    google.maps.LatLng[] | google.maps.LatLngLiteral[] | undefined
  >(undefined);
  const [directionsService, setDirectionsService] = useState<
    google.maps.DirectionsService | undefined
  >();

  useEffect(() => {
    if (isLoaded && !directionsService) {
      const dS = new google.maps.DirectionsService();
      setDirectionsService(dS);
    }
  }, [isLoaded, directionsService]);

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
    if (pickedCoords.length > 2) {
      const newWaypoints = [...pickedCoords];
      const dest = newWaypoints.pop();
      const start = newWaypoints.shift();
      const transformedWaypoints = newWaypoints.map((waypoint) => {
        return { location: waypoint } as google.maps.DirectionsWaypoint;
      });
      setWaypoints(transformedWaypoints);
      setOrigin(start);
      setDestination(dest);
    } else if (pickedCoords.length === 2) {
      setOrigin(pickedCoords[0]);
      setDestination(pickedCoords[1]);
      setWaypoints(undefined);
    }
  }, [pickedCoords]);

  const onMapClickHandler = (e: google.maps.MapMouseEvent) => {
    e.latLng && onPickedAddress(e.latLng, pickedCoords.length);
  };

  const onMapChangedHandler = () => {
    //console.log("MAP_CHANGED: ", mapRef.current);
  };

  const onDirectionsReceivedHandler = useCallback(
    (response: google.maps.DirectionsResult | null) => {
      if (response) {
        setPath(response.routes[0].overview_path);
        let sumDist = 0;
        response.routes[0].legs.forEach((leg) => {
          if (leg.distance) sumDist += leg.distance?.value;
        });
        const newDistance =
          sumDist > 1000 ? (sumDist / 1000).toFixed(1) + " km" : sumDist + " m";
        setDistance(newDistance);
      }
    },
    [setDistance]
  );

  const markers =
    pickedCoords.length >= 1
      ? pickedCoords.map((coord, index) => {
          return (
            <Marker
              key={"marker" + index}
              position={coord}
              label={(index + 1).toString()}
              title="Click me"
            />
          );
        })
      : null;

  useEffect(() => {
    if (destination && origin && directionsService) {
      directionsService.route(
        {
          destination: destination,
          origin: origin,
          waypoints: waypoints,
          travelMode: google.maps.TravelMode.DRIVING,
          provideRouteAlternatives: false,
          optimizeWaypoints: false,
        },
        (result, status) => {
          if (status === "OK") {
            onDirectionsReceivedHandler(result);
          }
        }
      );
    }
  }, [
    origin,
    destination,
    directionsService,
    waypoints,
    onDirectionsReceivedHandler,
  ]);

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

        {path && <Polyline path={path} options={polylineOptions} />}
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <CircularProgress />;
};

export default GoogleMaps;
