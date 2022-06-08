import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = ({ position, containerStyle }) => {
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  const { isLoaded } = useJsApiLoader({
    id: "marker-example",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const onMarkerLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
        {position && (
          <Marker
            id="marker-example"
            visible
            onLoad={onMarkerLoad}
            position={position}
          />
        )}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
