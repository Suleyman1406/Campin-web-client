import React, { useMemo, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: -33.89,
  lng: 151.274,
};
const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "marker-example",
    googleMapsApiKey: "AIzaSyAc7tEdrrE_GlUPY0xLxotEiKv91hJHJB8",
  });
  const [marker, setMarker] = useState({
    lat: -33.89,
    lng: 151.274,
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
    <>
      <button onClick={() => setMarker({ lat: -31.12, lng: 151.12 })}>
        Click me
      </button>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          {marker && (
            <Marker
              id="marker-example"
              onPositionChanged={(e) => {
                console.log("degisti");
              }}
              visible
              onLoad={onMarkerLoad}
              position={marker}
            />
          )}
        </>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default Map;
